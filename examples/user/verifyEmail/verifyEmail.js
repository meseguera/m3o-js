const { UserService } = require("m3o/user");
// Verify the email address of an account from a token sent in an email to the user.

const userService = new UserService(process.env.M3O_API_TOKEN);

async function verifyEmail() {
  const rsp = await userService.verifyEmail({
    email: "joe@example.com",
    token: "012345",
  });
  console.log(rsp);
}

verifyEmail();
