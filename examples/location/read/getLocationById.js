const { LocationService } = require("m3o/location");
// Read an entity by its ID

const locationService = new LocationService(process.env.M3O_API_TOKEN);

async function getLocationById() {
  const rsp = await locationService.read({
    id: "1",
  });
  console.log(rsp);
}

getLocationById();
