import { Reducer } from "react";
import { RaceCategory } from "../types/race-summaries";

export enum RaceSummaryActionTypes {
  SET_PAGE = "SET_PAGE",
  SET_LIMIT = "SET_LIMIT",
  SET_CATEGORY = "SET_CATEGORY",
}

export interface RaceSummaryTableState {
  selectedCategory: RaceCategory | "all";
  pagination: {
    page: number;
    limit: number;
  };
}

export const InitialRaceSummaryState: RaceSummaryTableState = {
  selectedCategory: "all",
  pagination: {
    limit: 5,
    page: 1,
  },
};

export type RaceSummaryAction =
  | { type: RaceSummaryActionTypes.SET_PAGE; payload: number }
  | { type: RaceSummaryActionTypes.SET_LIMIT; payload: number }
  | {
      type: RaceSummaryActionTypes.SET_CATEGORY;
      payload: RaceCategory | "all";
    };

export const RaceSummaryReducer: Reducer<
  RaceSummaryTableState,
  RaceSummaryAction
> = (state: RaceSummaryTableState, action: RaceSummaryAction) => {
  switch (action.type) {
    case RaceSummaryActionTypes.SET_LIMIT:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          limit: action.payload,
        },
      };
    case RaceSummaryActionTypes.SET_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload,
        },
      };
    case RaceSummaryActionTypes.SET_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};
