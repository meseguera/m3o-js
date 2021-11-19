const { DbService } = require("m3o/db");
// Truncate the records in a table

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function truncateTable() {
  const rsp = await dbService.truncate({
    table: "users",
  });
  console.log(rsp);
}

truncateTable();
