const { FunctionService } = require("m3o/function");
// Call a function by name

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

async function callAfunction() {
  const rsp = await functionService.call({
    name: "my-first-func",
    request: {},
  });
  console.log(rsp);
}

callAfunction();
