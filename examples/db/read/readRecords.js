const { DbService } = require("m3o/db");
// Read data from a table. Lookup can be by ID or via querying any field in the record.

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function readRecords() {
  const rsp = await dbService.read({
    query: "age == 43",
    table: "users",
  });
  console.log(rsp);
}

readRecords();
