const { OtpService } = require("m3o/otp");

// Validate the OTP code
async function validateOtp() {
  let otpService = new OtpService(process.env.M3O_API_TOKEN);
  let rsp = await otpService.validate({
    code: "656211",
    id: "asim@example.com",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

validateOtp();
