const { DbService } = require("m3o/db");
// Count records in a table

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function countEntriesInAtable() {
  const rsp = await dbService.count({
    table: "users",
  });
  console.log(rsp);
}

countEntriesInAtable();
