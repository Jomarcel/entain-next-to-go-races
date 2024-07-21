import { Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { FC, useReducer } from "react";
import { RaceSummary } from "./types/race-summaries";
import { enqueueSnackbar } from "notistack";
import {
  InitialRaceSummaryState,
  RaceSummaryReducer,
} from "./reducers/raceSummaryReducer";
import { getPageIndices } from "./utils/get-page-indices";
import { categorisedRaceSummaries } from "./utils/format-race-summary";
import { getRaceSummaries } from "./api";
import { PageBanner, FilterCategory, LoadingIndicator, RaceSummaryTable, ErrorMessage } from "./components";

const App: FC = () => {
  const [RaceSummaryState, dispatch] = useReducer(
    RaceSummaryReducer,
    InitialRaceSummaryState,
  );
  const {
    pagination: { limit, page },
    selectedCategory,
  } = RaceSummaryState;

  const {
    data: races,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["race_summaries"],
    queryFn: async () => {
      const raceData = await getRaceSummaries();
      const raceSummaryKeys = Object.keys(raceData.race_summaries);

      const allRaceSummaries = raceSummaryKeys
        .map((key) => raceData.race_summaries[key] as unknown as RaceSummary)
        .filter((el) => {
          const now = Math.floor(Date.now() / 1000);
          const isPastOneMinute = now >= el.advertised_start.seconds + 60;

          if (!isPastOneMinute) {
            return true;
          }
          return false;
        })
        .sort(
          (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
        );

      return categorisedRaceSummaries(allRaceSummaries);
    },
    initialData: { greyhound: [], harness: [], horse: [], all: [] },
  });

  if (isLoading) return <LoadingIndicator />;
  if (isError)
    return enqueueSnackbar(<ErrorMessage error={error} />, {
      variant: "error",
    });

  const { firstPageIndex, lastPageIndex } = getPageIndices(
    page,
    limit,
    races[selectedCategory].length,
  );

  const paginatedRaces = races[selectedCategory].slice(
    firstPageIndex,
    lastPageIndex,
  );

  return (
    <>
      <PageBanner />
      <Container>
        <Typography variant="h4" align="center">
          Next to Go
        </Typography>
        <FilterCategory
          dispatch={dispatch}
          raceSummaryState={RaceSummaryState}
        />
        <RaceSummaryTable
          dispatch={dispatch}
          isLoading={isLoading}
          races={paginatedRaces}
          raceSummaryState={RaceSummaryState}
          totalItems={races[selectedCategory].length}
          totalPages={Math.ceil(races[selectedCategory].length / limit)}
        />
      </Container>
    </>
  );
};

export default App;
