const { DbService } = require("m3o/db");

//
async function listTables() {
  let dbService = new DbService(process.env.M3O_API_TOKEN);
  let rsp = await dbService.listTables({});
  console.log(rsp);
}

listTables();
