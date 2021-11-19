const { IdService } = require("m3o/id");
// Generate a unique ID. Defaults to uuid.

const idService = new IdService(process.env.M3O_API_TOKEN);

async function generateAshortId() {
  const rsp = await idService.generate({
    type: "shortid",
  });
  console.log(rsp);
}

generateAshortId();
