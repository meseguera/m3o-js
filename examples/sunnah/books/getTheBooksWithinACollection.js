const { SunnahService } = require("m3o/sunnah");
// Get a list of books from within a collection. A book can contain many chapters
// each with its own hadiths.

const sunnahService = new SunnahService(process.env.M3O_API_TOKEN);

async function getTheBooksWithinAcollection() {
  const rsp = await sunnahService.books({
    collection: "bukhari",
  });
  console.log(rsp);
}

getTheBooksWithinAcollection();
