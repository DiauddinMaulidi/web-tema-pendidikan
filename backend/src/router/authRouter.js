import { Router } from "express";
import { Login, Register, getUsers, Logout } from "../authentication/Auth.js";
import { refreshToken } from "../authentication/refreshToken.js";
import { verifyToken } from "../authentication/verifyToken.js";

const router = Router()

router.get("/", verifyToken, getUsers)
router.post("/register", Register)
router.post("/login", Login)
router.get("/token", refreshToken)
router.delete("/logout", Logout)

export default router
