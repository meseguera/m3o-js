const { DbService } = require("m3o/db");
// Create a record in the database. Optionally include an "id" field otherwise it's set automatically.

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function createArecord() {
  const rsp = await dbService.create({
    record: {
      age: 42,
      id: "1",
      isActive: true,
      name: "Jane",
    },
    table: "users",
  });
  console.log(rsp);
}

createArecord();
