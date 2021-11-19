const { UrlService } = require("m3o/url");
// Proxy returns the destination URL of a short URL.

const urlService = new UrlService(process.env.M3O_API_TOKEN);

async function resolveAshortUrlToAlongDestinationUrl() {
  const rsp = await urlService.proxy({
    shortURL: "https://m3o.one/u/ck6SGVkYp",
  });
  console.log(rsp);
}

resolveAshortUrlToAlongDestinationUrl();
