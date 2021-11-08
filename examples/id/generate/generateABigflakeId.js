const { IdService } = require("m3o/id");

// Generate a unique ID. Defaults to uuid.
async function generateAbigflakeId() {
  let idService = new IdService(process.env.M3O_API_TOKEN);
  let rsp = await idService.generate({
    type: "bigflake",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

generateAbigflakeId();
