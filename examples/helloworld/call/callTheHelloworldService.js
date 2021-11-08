const { HelloworldService } = require("m3o/helloworld");

// Call returns a personalised "Hello $name" response
async function callTheHelloworldService() {
  let helloworldService = new HelloworldService(process.env.M3O_API_TOKEN);
  let rsp = await helloworldService.call({
    name: "John",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

callTheHelloworldService();
