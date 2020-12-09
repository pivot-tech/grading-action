/**
 * @module grading-action.readReport
 */
const fs = require("fs");

/**
 *
 * @param {string} coverageReportPath
 */
exports.readReport = function readReport(coverageReportPath) {
  try {
    return JSON.parse(fs.readFileSync(coverageReportPath, "utf-8"));
  } catch (readReportError) {
    console.error(readReportError);
    throw new Error(`[gradingAciton.readReport] Failed! 
        Ensure your project emits a mocha-awesome coverage-report!`);
  }
};
