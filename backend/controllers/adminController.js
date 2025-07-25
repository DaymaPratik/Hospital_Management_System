import Doctor from "../models/DoctorsModel.js";
import Staff from "../models/StaffModel.js";

export const addDoctorFunctions = async (req, res) => {
  const { email } = req.body;
  try {
    const FindDoctor = await Doctor.findOne({ email });
    if (FindDoctor) {
      return res.json({
        success: false,
        message: "Email of Doctor already exists",
      });
    }

    const addedDoctor = await Doctor.create(req.body);
    res.status(200).json({
      success: true,
      message: "Added a doctor",
       doctor: addedDoctor,
    });
  } catch (error) {
    console.error("Error in adding doctor in backend:", error);
    res.status(500).json({
      success: false,
      message: "Error in adding doctor in backend",
    });
  }
};
export const getDoctorsFunctions = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({ success: true, doctors });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch doctors" });
  }
};
export const deleteDoctorFunction = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!deletedDoctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }
    res.status(200).json({ success: true, message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting doctor" });
  }
};





export const addStaffFunction = async (req, res) => {
    //  const { email } = req.body;
  try {
    // const FindStaff = await Staff.findOne({ email });
    // if (FindStaff) {
    //   return res.json({
    //     success: false,
    //     message: "Email of Staff Member already exists",
    //   });
    // }

    const addedStaff = await Staff.create(req.body);
    res.status(200).json({
      success: true,
      message: "Added a staff member",
       staff: addedStaff,
    });
  } catch (error) {
    console.error("Error in adding staff member in backend:", error);
    res.status(500).json({
      success: false,
      message: "Error in adding staff member in backend",
    });
  }
};
export const getStaffMembersFunctions = async (req, res) => {
    try {
    const members = await Staff.find();
    res.status(200).json({ success: true, members });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch staff members" });
  }
};
export const deleteStaffMemberFunction = async (req, res) => {
  try {
    const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
    if (!deletedStaff) {
      return res.status(404).json({ success: false, message: "Staff Member not found" });
    }
    res.status(200).json({ success: true, message: "Staff Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting Staff Member" });
  }
};