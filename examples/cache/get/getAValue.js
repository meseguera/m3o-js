const { CacheService } = require("m3o/cache");

// Get an item from the cache by key. If key is not found, an empty response is returned.
async function getAvalue() {
  let cacheService = new CacheService(process.env.M3O_API_TOKEN);
  let rsp = await cacheService.get({
    key: "foo",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getAvalue();
