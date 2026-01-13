import { describe, expect, it } from "vitest";
import { mapApiAnalysis, mapSampleToCard } from "../api";

describe("api mappers", () => {
  it("maps analysis assignees to an array", () => {
    const mapped = mapApiAnalysis({
      id: 1,
      sample_id: "S-1",
      analysis_type: "SARA",
      status: "planned",
      assigned_to: "Dr. Lee",
    });

    expect(mapped.assignedTo).toEqual(["Dr. Lee"]);
  });

  it("maps sample status and fields", () => {
    const mapped = mapSampleToCard({
      sample_id: "S-2",
      well_id: "W-2",
      horizon: "H2",
      sampling_date: "2024-01-02",
      status: "review",
      storage_location: "Shelf B",
      assigned_to: "Casey",
    });

    expect(mapped.status).toBe("review");
    expect(mapped.storageLocation).toBe("Shelf B");
    expect(mapped.assignedTo).toBe("Casey");
  });
});
