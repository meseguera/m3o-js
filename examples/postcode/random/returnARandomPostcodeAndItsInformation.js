const { PostcodeService } = require("m3o/postcode");
// Return a random postcode and its related info

const postcodeService = new PostcodeService(process.env.M3O_API_TOKEN);

async function returnArandomPostcodeAndItsInformation() {
  const rsp = await postcodeService.random({});
  console.log(rsp);
}

returnArandomPostcodeAndItsInformation();
