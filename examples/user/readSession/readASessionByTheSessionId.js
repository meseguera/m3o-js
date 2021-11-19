const { UserService } = require("m3o/user");
// Read a session by the session id. In the event it has expired or is not found and error is returned.

const userService = new UserService(process.env.M3O_API_TOKEN);

async function readAsessionByTheSessionId() {
  const rsp = await userService.readSession({
    sessionId: "df91a612-5b24-4634-99ff-240220ab8f55",
  });
  console.log(rsp);
}

readAsessionByTheSessionId();
