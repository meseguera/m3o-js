const { CacheService } = require("m3o/cache");
// Delete a value from the cache. If key not found a success response is returned.

const cacheService = new CacheService(process.env.M3O_API_TOKEN);

async function deleteAvalue() {
  const rsp = await cacheService.delete({
    key: "foo",
  });
  console.log(rsp);
}

deleteAvalue();
