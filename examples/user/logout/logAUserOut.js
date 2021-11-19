const { UserService } = require("m3o/user");
// Logout a user account

const userService = new UserService(process.env.M3O_API_TOKEN);

async function logAuserOut() {
  const rsp = await userService.logout({
    sessionId: "df91a612-5b24-4634-99ff-240220ab8f55",
  });
  console.log(rsp);
}

logAuserOut();
