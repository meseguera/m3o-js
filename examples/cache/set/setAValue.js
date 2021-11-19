const { CacheService } = require("m3o/cache");
// Set an item in the cache. Overwrites any existing value already set.

const cacheService = new CacheService(process.env.M3O_API_TOKEN);

async function setAvalue() {
  const rsp = await cacheService.set({
    key: "foo",
    value: "bar",
  });
  console.log(rsp);
}

setAvalue();
