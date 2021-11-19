const { CacheService } = require("m3o/cache");
// Increment a value (if it's a number). If key not found it is equivalent to set.

const cacheService = new CacheService(process.env.M3O_API_TOKEN);

async function incrementAvalue() {
  const rsp = await cacheService.increment({
    key: "counter",
    value: 2,
  });
  console.log(rsp);
}

incrementAvalue();
