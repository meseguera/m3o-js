const { SmsService } = require("m3o/sms");
// Send an SMS.

const smsService = new SmsService(process.env.M3O_API_TOKEN);

async function sendSms() {
  const rsp = await smsService.send({
    from: "Alice",
    message: "Hi there!",
    to: "+447681129",
  });
  console.log(rsp);
}

sendSms();
