const { EmojiService } = require("m3o/emoji");
// Find an emoji by its alias e.g :beer:

const emojiService = new EmojiService(process.env.M3O_API_TOKEN);

async function findEmoji() {
  const rsp = await emojiService.find({
    alias: ":beer:",
  });
  console.log(rsp);
}

findEmoji();
