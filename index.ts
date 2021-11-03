import * as notes from "./notes";

export class Client {
  constructor(token: string) {
    this.notesService = new notes.NotesService(token);
  }

  notesService: notes.NotesService;
}
