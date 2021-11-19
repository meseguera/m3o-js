const { DbService } = require("m3o/db");
// Delete a record in the database by id.

const dbService = new DbService(process.env.M3O_API_TOKEN);

async function deleteArecord() {
  const rsp = await dbService.delete({
    id: "1",
    table: "users",
  });
  console.log(rsp);
}

deleteArecord();
