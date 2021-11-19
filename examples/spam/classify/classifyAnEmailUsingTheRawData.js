const { SpamService } = require("m3o/spam");
// Check whether an email is likely to be spam based on its attributes

const spamService = new SpamService(process.env.M3O_API_TOKEN);

async function classifyAnEmailUsingTheRawData() {
  const rsp = await spamService.classify({
    email_body:
      "Subject: Welcome\r\nTo: hello@emaple.com\r\nFrom: noreply@m3o.com\r\n\r\nHi there,\n\nWelcome to M3O.\n\nThanks\nM3O team",
  });
  console.log(rsp);
}

classifyAnEmailUsingTheRawData();
