const { UserService } = require("m3o/user");

// Update the account username or email
async function updateAnAccount() {
  let userService = new UserService(process.env.M3O_API_TOKEN);
  let rsp = await userService.update({
    email: "joe+2@example.com",
    id: "user-1",
  });
  console.log(rsp);
}

updateAnAccount();
