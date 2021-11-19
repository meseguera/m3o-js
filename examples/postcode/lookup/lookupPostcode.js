const { PostcodeService } = require("m3o/postcode");
// Lookup a postcode to retrieve the related region, county, etc

const postcodeService = new PostcodeService(process.env.M3O_API_TOKEN);

async function lookupPostcode() {
  const rsp = await postcodeService.lookup({
    postcode: "SW1A 2AA",
  });
  console.log(rsp);
}

lookupPostcode();
