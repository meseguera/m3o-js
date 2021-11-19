const { UserService } = require("m3o/user");
// Delete an account by id

const userService = new UserService(process.env.M3O_API_TOKEN);

async function deleteUserAccount() {
  const rsp = await userService.delete({
    id: "8b98acbe-0b6a-4d66-a414-5ffbf666786f",
  });
  console.log(rsp);
}

deleteUserAccount();
