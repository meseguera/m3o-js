const { GifsService } = require("m3o/gifs");
// Search for a GIF

const gifsService = new GifsService(process.env.M3O_API_TOKEN);

async function search() {
  const rsp = await gifsService.search({
    limit: 2,
    query: "dogs",
  });
  console.log(rsp);
}

search();
