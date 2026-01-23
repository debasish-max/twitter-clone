import express from "express";
import { getMe, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> c1b20d5ab65918b65c63ef6b396957e485012706
