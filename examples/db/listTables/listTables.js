const { DbService } = require("m3o/db");
// List tables in the DB

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function listTables() {
  const rsp = await dbService.listTables({});
  console.log(rsp);
}

listTables();
