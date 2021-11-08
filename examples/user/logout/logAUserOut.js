const { UserService } = require("m3o/user");

// Logout a user account
async function logAuserOut() {
  let userService = new UserService(process.env.M3O_API_TOKEN);
  let rsp = await userService.logout({
    sessionId: "sds34s34s34-s34s34-s43s43s34-s4s34s",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

logAuserOut();
