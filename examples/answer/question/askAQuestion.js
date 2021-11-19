const { AnswerService } = require("m3o/answer");
// Ask a question and receive an instant answer

const answerService = new AnswerService(process.env.M3O_API_TOKEN);

async function askAquestion() {
  const rsp = await answerService.question({
    query: "microsoft",
  });
  console.log(rsp);
}

askAquestion();
