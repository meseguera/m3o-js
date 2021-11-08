const { VehicleService } = require("m3o/vehicle");

// Lookup a UK vehicle by it's registration number
async function lookupVehicle() {
  let vehicleService = new VehicleService(process.env.M3O_API_TOKEN);
  let rsp = await vehicleService.lookup({
    registration: "LC60OTA",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

lookupVehicle();
