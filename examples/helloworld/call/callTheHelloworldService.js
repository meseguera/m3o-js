const { HelloworldService } = require("m3o/helloworld");
// Call returns a personalised "Hello $name" response

const helloworldService = new HelloworldService(process.env.M3O_API_TOKEN);

async function callTheHelloworldService() {
  const rsp = await helloworldService.call({
    name: "John",
  });
  console.log(rsp);
}

callTheHelloworldService();
