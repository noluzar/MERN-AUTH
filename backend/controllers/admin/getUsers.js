import mongoose from "mongoose";
import User from "../../models/userModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.log("error in fetching users:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
};
