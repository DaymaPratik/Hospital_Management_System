import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    //   match: /^[0-9]{10}$/, // simple 10-digit phone validation
    },
    shift: {
      type: String,
      required: true,
    //   enum: ["Morning", "Evening", "Night", "Flexible"], // customize as needed
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", staffSchema);
export default Staff;
