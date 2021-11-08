const { GifsService } = require("m3o/gifs");

// Search for a GIF
async function search() {
  let gifsService = new GifsService(process.env.M3O_API_TOKEN);
  let rsp = await gifsService.search({
    limit: 2,
    query: "dogs",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

search();
