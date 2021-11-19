const { FunctionService } = require("m3o/function");
// List all the deployed functions

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

async function listFunctions() {
  const rsp = await functionService.list({});
  console.log(rsp);
}

listFunctions();
