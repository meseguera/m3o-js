const { QuranService } = require("m3o/quran");
// Get a summary for a given chapter (surah)

const quranService = new QuranService(process.env.M3O_API_TOKEN);

async function getChapterSummary() {
  const rsp = await quranService.summary({
    chapter: 1,
  });
  console.log(rsp);
}

getChapterSummary();
