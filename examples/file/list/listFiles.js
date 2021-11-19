const { FileService } = require("m3o/file");
// List files by their project and optionally a path.

const fileService = new FileService(process.env.M3O_API_TOKEN);

async function listFiles() {
  const rsp = await fileService.list({
    project: "examples",
  });
  console.log(rsp);
}

listFiles();
