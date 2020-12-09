/**
 * @module grading-action.generateGradeReport
 */

/**
 * @typedef GithubRepo
 * @property {string} owner
 * @property {string} repo
 */

/**
 * @typedef GithubContext
 * @property {GithubRepo} repo
 */

/**
 * @typedef CoverageReportStats
 * @property {number} passPercent
 */

/**
 * @typedef CoverageReport
 * @property {CoverageReportStats} stats
 */

/**
 * @typedef GradeReport
 * @property {string} student
 * @property {string} project
 * @property {number} grade
 */

/**
 * @param {GithubContext} githubContext
 * @param {CoverageReport} report
 * @returns {GradeReport}
 */
exports.generateGradeReport = function generateGradeReport(
  githubContext,
  report
) {
  return {
    student: githubContext.repo.owner,
    project: githubContext.repo.repo,
    grade: report.stats.passPercent,
  };
};
