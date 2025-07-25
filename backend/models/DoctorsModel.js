import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  experience: { type: String, required: true },
  department: { type: String, required: true },
  qualification: { type: String, required: true },
  specialization: { type: String, required: true },
  availableTime: { type: String, required: true },
  gender: { type: String, required: true },
  photo:{type:String,required:true ,default: "https://randomuser.me/api/portraits/men/31.jpg"}
}, { timestamps: true });

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
