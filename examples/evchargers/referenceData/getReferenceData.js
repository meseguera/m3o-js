const { EvchargersService } = require("m3o/evchargers");
// Retrieve reference data as used by this API and in conjunction with the Search endpoint

const evchargersService = new EvchargersService(process.env.M3O_API_TOKEN);

async function getReferenceData() {
  const rsp = await evchargersService.referenceData({});
  console.log(rsp);
}

getReferenceData();
