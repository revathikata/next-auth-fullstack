import { mongoose  } from "mongoose";
// import { type } from "os";
// import { type } from "os";
const userSchema = new mongoose.Schema({
username: {
type: String,
// required: [true, "please provide a username"],
// unique:true,
},
email: {
type: String,
// required: [true, "please provide a email"],
// unique:true,
},
password: {
type: String,
// required: [true, "please provide a password"],
},
// isVerified: {
//     type:Boolean,
//     default:false
// },
// isAdmin: {
//     type:Boolean,
//     default:false
// },
// forgotPasswordToken: String,
// forgotPasswordTokenExpiry:Date,
// verifyToken: String,
// verifyTokenExpiry:Date
})
const User = mongoose.models.user || mongoose.model
("users", userSchema);
export default User