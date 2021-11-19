const { EmojiService } = require("m3o/emoji");
// Print text and renders the emojis with aliases e.g
// let's grab a :beer: becomes let's grab a 🍺

const emojiService = new EmojiService(process.env.M3O_API_TOKEN);

async function printTextIncludingEmoji() {
  const rsp = await emojiService.print({
    text: "let's grab a :beer:",
  });
  console.log(rsp);
}

printTextIncludingEmoji();
