import { RaceCategories, RaceSummary } from "../types/race-summaries";

export const categorisedRaceSummaries = (races: RaceSummary[]) => {
  const updatedSummaries = races.reduce(
    (
      acc: {
        greyhound: RaceSummary[];
        harness: RaceSummary[];
        horse: RaceSummary[];
        all: RaceSummary[];
      },
      raceSummary,
    ) => {
      const { category_id } = raceSummary;

      switch (category_id) {
        case RaceCategories.greyhound:
          acc.greyhound.push(raceSummary);
          break;
        case RaceCategories.harness:
          acc.harness.push(raceSummary);
          break;
        case RaceCategories.horse:
          acc.horse.push(raceSummary);
          break;
      }
      return acc;
    },
    { greyhound: [], harness: [], horse: [], all: races },
  );
  return updatedSummaries;
};
