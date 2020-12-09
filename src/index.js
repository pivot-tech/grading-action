const { readReport } = require("./readReport");
const { generateGradeReport } = require("./generateGradeReport");
const { postGrade } = require("./postGrade");

exports.generateGradeReport = generateGradeReport;
exports.postGrade = postGrade;
exports.readReport = readReport;
exports.action = function gradingAction(
  adminEndpointURL,
  coverageReportPath,
  githubContext
) {
  const coverageReport = readReport(coverageReportPath);
  const gradeReport = generateGradeReport(githubContext, coverageReport);
  return postGrade(adminEndpointURL, gradeReport).then(() =>
    Promise.resolve(gradeReport)
  );
};
