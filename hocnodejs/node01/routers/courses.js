import express from "express";
import useController from "../controllers/use.controller.js";
const router = express.Router();

//users/courses
router.get("/", useController.courses);

router.get("/active", useController.courseActive);

router.get("/pending", useController.coursePending);

export default router;
