const core = require("@actions/core");
const github = require("@actions/github");
const { action: runGradingAction } = require("./src");

try {
  const adminEndpointURL = core.getInput("adminEndpointURL");
  const coverageReportPath = core.getInput("coverageReportPath");
  runGradingAction(adminEndpointURL, coverageReportPath, github.context).then(
    () => {
      core.setOutput("grade", gradeReport.grade);
    }
  );
} catch (error) {
  core.setFailed(error.message);
}
