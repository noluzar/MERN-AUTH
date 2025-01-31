import mongoose from "mongoose";
import User from "../../models/userModel.js";


export const deleteUser = async (req, res) => {
    const {id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid User Id"});
    }

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted"});
    } catch (error) {
        console.log("Error in deleting user:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
};