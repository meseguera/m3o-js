const { UserService } = require("m3o/user");
// Reset password with the code sent by the "SendPasswordResetEmail" endoint.

const userService = new UserService(process.env.M3O_API_TOKEN);

async function resetPassword() {
  const rsp = await userService.resetPassword({
    code: "012345",
    confirmPassword: "NewPassword1",
    email: "joe@example.com",
    newPassword: "NewPassword1",
  });
  console.log(rsp);
}

resetPassword();
