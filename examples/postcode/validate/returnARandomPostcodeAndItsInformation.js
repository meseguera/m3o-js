const { PostcodeService } = require("m3o/postcode");

// Validate a postcode.
async function returnArandomPostcodeAndItsInformation() {
  let postcodeService = new PostcodeService(process.env.M3O_API_TOKEN);
  let rsp = await postcodeService.validate({
    postcode: "SW1A 2AA",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

returnArandomPostcodeAndItsInformation();
