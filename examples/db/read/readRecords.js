const { DbService } = require("m3o/db");

// Read data from a table. Lookup can be by ID or via querying any field in the record.
async function readRecords() {
  let dbService = new DbService(process.env.M3O_API_TOKEN);
  let rsp = await dbService.read({
    query: "age == 43",
    table: "users",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

readRecords();
