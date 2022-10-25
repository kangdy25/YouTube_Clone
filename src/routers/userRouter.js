import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => {
    res.send("<h1>Edit User</h1>");
}
const handleDeleteUser = (req, res) => {
    res.send("<h1>Delete User</h1>");
}

userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDeleteUser);

export default userRouter;
        