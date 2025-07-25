import express from "express";
import {
  addDoctorFunctions,
  getDoctorsFunctions,
  addStaffFunction,
  getStaffMembersFunctions,
  deleteDoctorFunction,
  deleteStaffMemberFunction
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/addDoctor", addDoctorFunctions);
router.get("/getDoctors", getDoctorsFunctions);
router.post("/addStaffMembers", addStaffFunction);
router.get("/getStaffMembers", getStaffMembersFunctions);
router.delete("/deleteDoctor/:id", deleteDoctorFunction);
router.delete("/deleteStaffMember/:id", deleteStaffMemberFunction);

export default router;
