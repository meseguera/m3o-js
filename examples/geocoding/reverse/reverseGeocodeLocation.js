const { GeocodingService } = require("m3o/geocoding");
// Reverse lookup an address from gps coordinates

const geocodingService = new GeocodingService(process.env.M3O_API_TOKEN);

async function reverseGeocodeLocation() {
  const rsp = await geocodingService.reverse({
    latitude: 51.5123064,
    longitude: -0.1216235,
  });
  console.log(rsp);
}

reverseGeocodeLocation();
