const { DbService } = require("m3o/db");

//
async function renameTable() {
  let dbService = new DbService(process.env.M3O_API_TOKEN);
  let rsp = await dbService.renameTable({
    from: "events",
    to: "events_backup",
  });
  console.log(rsp);
}

renameTable();
