const { CacheService } = require("m3o/cache");
// Get an item from the cache by key. If key is not found, an empty response is returned.

const cacheService = new CacheService(process.env.M3O_API_TOKEN);

async function getAvalue() {
  const rsp = await cacheService.get({
    key: "foo",
  });
  console.log(rsp);
}

getAvalue();
