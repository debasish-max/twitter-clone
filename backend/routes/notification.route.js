import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { deleteNotifications, getNotifications } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> c1b20d5ab65918b65c63ef6b396957e485012706
