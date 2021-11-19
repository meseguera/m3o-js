const { DbService } = require("m3o/db");
// Rename a table

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function renameTable() {
  const rsp = await dbService.renameTable({
    from: "events",
    to: "events_backup",
  });
  console.log(rsp);
}

renameTable();
