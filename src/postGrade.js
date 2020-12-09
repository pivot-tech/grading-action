/**
 * @module grading-action.postGrade
 */

const fetch = require("isomorphic-fetch");
/**
 *
 * @param {string} adminEndpointURL
 * @param {import('./generateGradeReport').GradeReport} grade
 */
exports.postGrade = function postGrade(adminEndpointURL, grade) {
  return fetch(adminEndpointURL, {
    method: "POST",
    body: JSON.stringify(grade),
  });
};
