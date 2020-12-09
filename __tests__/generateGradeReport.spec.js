const { generateGradeReport } = require("../src");

describe("generateGradeReport", () => {
  test("extracting a report from a githubContext and a coverageReport", () => {
    expect(
      generateGradeReport(
        {
          repo: {
            repo: "BasicHTML",
            owner: "Jane456",
          },
        },
        {
          stats: {
            passPercent: 50,
          },
        }
      )
    ).toEqual({
      project: "BasicHTML",
      student: "Jane456",
      grade: 50,
    });
  });
});
