const { QuranService } = require("m3o/quran");
// Search the Quran for any form of query or questions

const quranService = new QuranService(process.env.M3O_API_TOKEN);

async function searchTheQuran() {
  const rsp = await quranService.search({
    query: "messenger",
  });
  console.log(rsp);
}

searchTheQuran();
