const { FunctionService } = require("m3o/function");
// Get the info for a deployed function

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

async function describeFunctionStatus() {
  const rsp = await functionService.describe({
    name: "my-first-func",
    project: "tests",
  });
  console.log(rsp);
}

describeFunctionStatus();
