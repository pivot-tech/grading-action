const fs = require("fs");
jest.mock("fs");

describe("readReport", () => {
  fs.readFileSync.mockReturnValueOnce(`{
        "stats": {
            "passPercent": 100
        }      
    }`);
  test("reading in coverageReports", () => {
    const { readReport } = require("../src");
    expect(readReport("")).toEqual({
      stats: {
        passPercent: 100,
      },
    });
  });
});
