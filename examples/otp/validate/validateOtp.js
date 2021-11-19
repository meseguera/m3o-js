const { OtpService } = require("m3o/otp");
// Validate the OTP code

const otpService = new OtpService(process.env.M3O_API_TOKEN);

async function validateOtp() {
  const rsp = await otpService.validate({
    code: "656211",
    id: "asim@example.com",
  });
  console.log(rsp);
}

validateOtp();
