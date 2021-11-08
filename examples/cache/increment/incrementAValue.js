const { CacheService } = require("m3o/cache");

// Increment a value (if it's a number). If key not found it is equivalent to set.
async function incrementAvalue() {
  let cacheService = new CacheService(process.env.M3O_API_TOKEN);
  let rsp = await cacheService.increment({
    key: "counter",
    value: 2,
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

incrementAvalue();
