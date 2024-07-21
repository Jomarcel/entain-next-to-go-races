import axios from "axios";
import { RACE_SUMMARY_API_URL } from "../constants/api";
import { RaceSummary } from "../types/race-summaries";

export const getRaceSummaries = async (): Promise<{
  race_summaries: Record<string, RaceSummary[]>;
}> => {
  const response = await axios.get(RACE_SUMMARY_API_URL);
  const {
    data: { data },
  } = response;
  return data;
};
