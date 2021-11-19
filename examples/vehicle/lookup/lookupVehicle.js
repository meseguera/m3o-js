const { VehicleService } = require("m3o/vehicle");
// Lookup a UK vehicle by it's registration number

const vehicleService = new VehicleService(process.env.M3O_API_TOKEN);

async function lookupVehicle() {
  const rsp = await vehicleService.lookup({
    registration: "LC60OTA",
  });
  console.log(rsp);
}

lookupVehicle();
