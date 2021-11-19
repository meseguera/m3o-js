const { NotesService } = require("m3o/notes");
// List all the notes

const notesService = new NotesService(process.env.M3O_API_TOKEN);

async function listAllNotes() {
  const rsp = await notesService.list({});
  console.log(rsp);
}

listAllNotes();
