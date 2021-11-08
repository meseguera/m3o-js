const { FileService } = require("m3o/file");

// List files by their project and optionally a path.
async function listFiles() {
  let fileService = new FileService(process.env.M3O_API_TOKEN);
  let rsp = await fileService.list({
    project: "examples",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

listFiles();
