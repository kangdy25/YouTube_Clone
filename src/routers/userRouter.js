import express from "express";
import { remove, edit, see, logout } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/logout", logout);
userRouter.get("/delete", remove);
userRouter.get(":id", see);

export default userRouter;
