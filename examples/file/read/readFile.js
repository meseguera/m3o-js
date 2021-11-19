const { FileService } = require("m3o/file");
// Read a file by path

const fileService = new FileService(process.env.M3O_API_TOKEN);

async function readFile() {
  const rsp = await fileService.read({
    path: "/document/text-files/file.txt",
    project: "examples",
  });
  console.log(rsp);
}

readFile();
