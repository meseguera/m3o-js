const { DbService } = require("m3o/db");

const dbService = new DbService(process.env.M3O_API_TOKEN);

// Rename a table
async function renameTable() {
  const rsp = await dbService.renameTable({
    from: "events",
    to: "events_backup",
  });
  console.log(rsp);
}

renameTable();
