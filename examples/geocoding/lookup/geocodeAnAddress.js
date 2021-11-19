const { GeocodingService } = require("m3o/geocoding");
// Lookup returns a geocoded address including normalized address and gps coordinates. All fields are optional, provide more to get more accurate results

const geocodingService = new GeocodingService(process.env.M3O_API_TOKEN);

async function geocodeAnAddress() {
  const rsp = await geocodingService.lookup({
    address: "10 russell st",
    city: "london",
    country: "uk",
    postcode: "wc2b",
  });
  console.log(rsp);
}

geocodeAnAddress();
