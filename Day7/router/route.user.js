// const {getUserController,createRoleController} from '';
const { listUsersController,createUserController } = require("../controller/user.controller");

app.get("/list", listUsersController);
app.post('/createrole',createUserController);
// app.post('/create',createRoleController);


