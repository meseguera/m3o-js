const { UserService } = require("m3o/user");
// Read an account by id, username or email. Only one need to be specified.

const userService = new UserService(process.env.M3O_API_TOKEN);

async function readAnAccountById() {
  const rsp = await userService.read({
    id: "user-1",
  });
  console.log(rsp);
}

readAnAccountById();
