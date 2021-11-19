const { UrlService } = require("m3o/url");

const urlService = new UrlService(process.env.M3O_API_TOKEN);

// Shortens a destination URL and returns a full short URL.
async function shortenAlongUrl() {
  const rsp = await urlService.shorten({
    destinationURL: "https://mysite.com/this-is-a-rather-long-web-address",
  });
  console.log(rsp);
}

shortenAlongUrl();
