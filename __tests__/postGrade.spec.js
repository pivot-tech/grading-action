const fetch = require("isomorphic-fetch");
jest.mock("isomorphic-fetch");

describe("postGrade", () => {
  test("submitting a gradeReport calls fetch", () => {
    const { postGrade } = require("../src");
    postGrade("someURL", {
      student: "Jane456",
      project: "BasicHTML",
      grade: 100,
    });
    expect(fetch).toBeCalledTimes(1);
  });
});
