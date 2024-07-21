import {
  Box,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { classes } from "./styles";
import { IPaginationState } from "../../types/race-summaries";
import {
  RaceSummaryAction,
  RaceSummaryActionTypes,
} from "../../reducers/raceSummaryReducer";
import { Dispatch } from "react";

const GenericTablePagination = ({
  paginationState,
  dispatch,
  totalPages,
  totalItems,
}: {
  paginationState: IPaginationState;
  dispatch: Dispatch<RaceSummaryAction>;
  totalPages: number;
  totalItems: number;
}) => {
  const handleSetLimit = (e: SelectChangeEvent<number>) => {
    dispatch({
      type: RaceSummaryActionTypes.SET_LIMIT,
      payload: Number(e.target.value),
    });
  };

  return (
    <Box sx={classes.paginationParent}>
      <Box sx={classes.rowSelectContainer}>
        <span>Rows per page: </span>
        <FormControl>
          <Select
            id="rows-per-page"
            sx={classes.rowSelect}
            value={paginationState.limit}
            onChange={handleSetLimit}
            displayEmpty
          >
            <MenuItem id="first-rpp-item" value={5}>
              5
            </MenuItem>
            <MenuItem id="first-rpp-item" value={10}>
              10
            </MenuItem>
            <MenuItem id="second-rpp-item" value={20}>
              20
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={classes.paginationContainer}>
        <Pagination
          id="pagination-menu"
          count={totalPages}
          page={paginationState.page}
          siblingCount={0}
          onChange={(_e, page) =>
            dispatch({ type: RaceSummaryActionTypes.SET_PAGE, payload: page })
          }
          sx={classes.pagination}
        />
        <span id="total-jobs">{totalItems} Total</span>
      </Box>
    </Box>
  );
};

export default GenericTablePagination;
