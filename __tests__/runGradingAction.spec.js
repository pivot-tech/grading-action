const fs = require("fs");
const fetch = require("isomorphic-fetch");
jest.mock("fs");
jest.mock("isomorphic-fetch");

describe("gradingAction", () => {
  const testAdminEndpointURL = "http://pivot.tech/api/v1/grades";
  const testGithubContext = {
    repo: {
      owner: "Jane456",
      repo: "BasicHTML",
    },
  };
  const testCoverageReport = `{
        "stats": {
            "passPercent": 40
        }
    }`;
  fs.readFileSync.mockReturnValueOnce(testCoverageReport);
  fetch.mockReturnValueOnce(Promise.resolve());
  const expectedGradeReport = {
    student: "Jane456",
    project: "BasicHTML",
    grade: 40,
  };
  const expectedFetchArgs = {
    method: "POST",
    body: JSON.stringify(expectedGradeReport),
  };
  test("reading a coverage report and submitting grading report", () => {
    const { action: runGradingAction } = require("../src");
    return runGradingAction(
      testAdminEndpointURL,
      "./coverage-report.json",
      testGithubContext
    ).then((grade) => {
      expect(grade.grade).toBe(40);
      expect(fs.readFileSync).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith(
        testAdminEndpointURL,
        expectedFetchArgs
      );
    });
  });
});
