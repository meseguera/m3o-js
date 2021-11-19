const { UserService } = require("m3o/user");
// Login using username or email. The response will return a new session for successful login,
// 401 in the case of login failure and 500 for any other error

const userService = new UserService(process.env.M3O_API_TOKEN);

async function logAuserIn() {
  const rsp = await userService.login({
    email: "joe@example.com",
    password: "Password1",
  });
  console.log(rsp);
}

logAuserIn();
