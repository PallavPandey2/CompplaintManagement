import express from "express";
import auth, { validateComplaint } from "../auth/auth.js";

import { createComplaint, deleteComplaint, getCmpById, getComplaints, updateComplaint } from "../controllers/complaint.js";
const router = express.Router();

router.post("/",createComplaint);
router.get("/",getComplaints)
router.post("/delete/:id",deleteComplaint);
router.patch("/:id",updateComplaint);
router.get("/:id",getCmpById)

export default router;
