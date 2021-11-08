const { FileService } = require("m3o/file");

// Delete a file by project name/path
async function deleteFile() {
  let fileService = new FileService(process.env.M3O_API_TOKEN);
  let rsp = await fileService.delete({
    path: "/document/text-files/file.txt",
    project: "examples",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

deleteFile();
