import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { Dispatch, FC } from "react";
import { RaceCategories, RaceCategory } from "../../types/race-summaries";
import {
  RaceSummaryAction,
  RaceSummaryActionTypes,
  RaceSummaryTableState,
} from "../../reducers/raceSummaryReducer";

const raceCategories = Object.keys(RaceCategories).map((val) =>
  val.toLowerCase(),
);

interface IProps {
  dispatch: Dispatch<RaceSummaryAction>;
  raceSummaryState: RaceSummaryTableState;
}

const FilterCategory: FC<IProps> = ({ dispatch, raceSummaryState }) => {
  const handleCategoryChange = (event: SelectChangeEvent) => {
    dispatch({
      type: RaceSummaryActionTypes.SET_CATEGORY,
      payload: event.target.value as RaceCategory | "all",
    });
  };

  return (
    <Stack mb={2} spacing={2} direction="row" alignItems="center">
      <Typography
        color={(theme) => theme.palette.common.black}
        variant="body1"
        align="center"
        gutterBottom
      >
        {" "}
        Category Filter:{" "}
      </Typography>
      <Select
        data-testid="category-filter"
        sx={{
          "& .MuiSelect-select": {
            paddingY: (theme) => theme.spacing(1),
          },
        }}
        value={raceSummaryState.selectedCategory}
        onChange={handleCategoryChange}
      >
        <MenuItem value="all">All</MenuItem>
        {raceCategories.map((category, idx) => (
          <MenuItem key={`${category}${idx}`} value={category}>
            {`${category[0].toUpperCase()}${category.substring(1)}`}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default FilterCategory;
