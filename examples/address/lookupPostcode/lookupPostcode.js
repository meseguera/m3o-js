const { AddressService } = require("m3o/address");
// Lookup a list of UK addresses by postcode

const addressService = new AddressService(process.env.M3O_API_TOKEN);

async function lookupPostcode() {
  const rsp = await addressService.lookupPostcode({
    postcode: "SW1A 2AA",
  });
  console.log(rsp);
}

lookupPostcode();
