import { render, waitFor } from "@testing-library/react";
import App from "../../index";
import { mockRaceSummaries } from "../../constants/mock-data";
import { getRaceSummaries } from "../../api";
jest.mock("../../api");

describe(App, () => {
  beforeEach(() => {
    const getRaceSummaryMock = getRaceSummaries as jest.Mock;
    getRaceSummaryMock.mockResolvedValue(mockRaceSummaries);
  });

  it("getRaceSummaries should returns expected data", async () => {
    const mockData = await getRaceSummaries();
    const resolvedDataKeys = Object.keys(mockData.race_summaries);
    const totalCategories = resolvedDataKeys
      .map((key) => mockData.race_summaries[key].length)
      .reduce((acc, val) => (acc += val));
    expect(mockData).toEqual(mockRaceSummaries);
    expect(totalCategories).toEqual(5);
  });
  it("Should display the correct column headers", async () => {
    const { getAllByRole } = render(<App />);
    const expectedHeaders = [
      "Meeting Name",
      "Race Number",
      "Start Time",
      "Starts in",
    ];

    await waitFor(() => {
      const headerRows = getAllByRole("columnheader");
      headerRows.forEach((header, index) => {
        expect(header).toHaveTextContent(expectedHeaders[index]);
      });
    });
  });
  it("Should display page title", async () => {
    const { getByRole, queryByRole } = render(<App />);
    await waitFor(() => {
      expect(queryByRole("progressbar")).not.toBeInTheDocument();
    });
    const heading = getByRole("heading", { name: "Next to Go" }).textContent;
    expect(heading).toBe("Next to Go");
  });
});
