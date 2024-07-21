import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Dispatch, FC } from "react";
import { RaceSummary } from "../../types/race-summaries";
import GenericTablePagination from "./pagination";
import {
  RaceSummaryAction,
  RaceSummaryTableState,
} from "../../reducers/raceSummaryReducer";
import LoadingTableItems from "./loading-table-items";
import { convertUnixToReadableDate } from "../../utils/convert-unix";
import { CountdownTimer } from "../../utils/countdown-timer";

interface IProps {
  dispatch: Dispatch<RaceSummaryAction>;
  isLoading: boolean;
  races: RaceSummary[];
  raceSummaryState: RaceSummaryTableState;
  totalItems: number;
  totalPages: number;
}

export const RaceSummaryTable: FC<IProps> = ({
  dispatch,
  isLoading,
  races,
  raceSummaryState,
  totalItems,
  totalPages,
}) => {
  const {
    pagination: { limit, page },
  } = raceSummaryState;

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Meeting Name</TableCell>
              <TableCell>Race Number</TableCell>
              <TableCell>Start Time&nbsp;(24 hour)</TableCell>
              <TableCell>Starts in</TableCell>
            </TableRow>
          </TableHead>
          {!isLoading && (
            <TableBody>
              {races.map((race: RaceSummary) => (
                <TableRow data-testid={"race-row"} key={race.race_id}>
                  <TableCell>{race.meeting_name}</TableCell>
                  <TableCell>{race.race_number}</TableCell>
                  <TableCell>
                    {convertUnixToReadableDate(race.advertised_start.seconds)}
                  </TableCell>
                  <TableCell>
                    <CountdownTimer
                      initialUnixTime={race.advertised_start.seconds}
                    />
                  </TableCell>
                </TableRow>
              ))}
              {!races.length && (
                <TableRow>
                  <TableCell>no match found</TableCell>
                </TableRow>
              )}
              {isLoading && <LoadingTableItems numberOfRows={10} />}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <GenericTablePagination
        paginationState={{ limit, page }}
        totalItems={totalItems}
        totalPages={totalPages}
        dispatch={dispatch}
      />
    </>
  );
};
