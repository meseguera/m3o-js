const { FunctionService } = require("m3o/function");
// Delete a function by name

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

async function deleteAfunction() {
  const rsp = await functionService.delete({
    name: "my-first-func",
    project: "tests",
  });
  console.log(rsp);
}

deleteAfunction();
