const { LocationService } = require("m3o/location");
// Search for entities in a given radius

const locationService = new LocationService(process.env.M3O_API_TOKEN);

async function searchForLocations() {
  const rsp = await locationService.search({
    center: {
      latitude: 51.511061,
      longitude: -0.120022,
    },
    numEntities: 10,
    radius: 100,
    type: "bike",
  });
  console.log(rsp);
}

searchForLocations();
