const { DbService } = require("m3o/db");
// Update a record in the database. Include an "id" in the record to update.

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function updateArecord() {
  const rsp = await dbService.update({
    record: {
      age: 43,
      id: "1",
    },
    table: "users",
  });
  console.log(rsp);
}

updateArecord();
