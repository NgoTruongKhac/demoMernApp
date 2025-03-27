const routeStudent = require("./student");
const routeUser = require("./user");

const authenticateRole = require("../middlewares/auth/authenticateRoles");
const authenticateToken = require("../middlewares/auth/authenticateToken");

function route(app) {
  app.get("/", (req, res) => {
    res.send("hello");
  });

  app.use(
    "/students",
    authenticateToken,
    authenticateRole("admin"),
    routeStudent
  );

  app.use("/users", routeUser);
}

module.exports = { route };
