const { DbService } = require("m3o/db");

// Drop a table in the DB
async function dropTable() {
  let dbService = new DbService(process.env.M3O_API_TOKEN);
  let rsp = await dbService.dropTable({
    table: "users",
  });
  console.log(rsp);
}

dropTable();
