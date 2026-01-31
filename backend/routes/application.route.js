import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicatns,
  getApplyJobs,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

router.route("/apply/:id").get(isAuthenticated, applyJob);
router.route("/get").get(isAuthenticated, getApplyJobs);
router.route("/:id/applicants").get(isAuthenticated, getApplicatns);
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;
