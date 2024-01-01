import express from "express";
import coursesRouter from "./courses.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import useController from "../controllers/use.controller.js";
const router = express.Router();

router.use("/courses", coursesRouter);

// router.use(authMiddleware);

//users
router.get("/", useController.index);

//users/add
router.get("/add", useController.add);

//users/active
router.get("/active", useController.active);

export default router;
