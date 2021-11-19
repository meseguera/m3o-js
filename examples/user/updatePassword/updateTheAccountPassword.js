const { UserService } = require("m3o/user");
// Update the account password

const userService = new UserService(process.env.M3O_API_TOKEN);

async function updateTheAccountPassword() {
  const rsp = await userService.updatePassword({
    confirmPassword: "Password2",
    id: "user-1",
    newPassword: "Password2",
    oldPassword: "Password1",
  });
  console.log(rsp);
}

updateTheAccountPassword();
