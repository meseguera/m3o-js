const { NotesService } = require("m3o/notes");
// Update a note

const notesService = new NotesService(process.env.M3O_API_TOKEN);

async function updateAnote() {
  const rsp = await notesService.update({
    note: {
      id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
      text: "Updated note text",
      title: "Update Note",
    },
  });
  console.log(rsp);
}

updateAnote();
