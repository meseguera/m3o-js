const { DbService } = require("m3o/db");
// Drop a table in the DB

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function dropTable() {
  const rsp = await dbService.dropTable({
    table: "users",
  });
  console.log(rsp);
}

dropTable();
