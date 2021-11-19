const { UserService } = require("m3o/user");
// Create a new user account. The email address and username for the account must be unique.

const userService = new UserService(process.env.M3O_API_TOKEN);

async function createAnAccount() {
  const rsp = await userService.create({
    email: "joe@example.com",
    id: "user-1",
    password: "Password1",
    username: "joe",
  });
  console.log(rsp);
}

createAnAccount();
