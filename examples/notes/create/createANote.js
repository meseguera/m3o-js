const { NotesService } = require("m3o/notes");
// Create a new note

const notesService = new NotesService(process.env.M3O_API_TOKEN);

async function createAnote() {
  const rsp = await notesService.create({
    text: "This is my note",
    title: "New Note",
  });
  console.log(rsp);
}

createAnote();
