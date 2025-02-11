import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

//@desc Auth user/set token
//route POST /api/users/auth
//@access Public

const authUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, isAdmin } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password')
    }

});

//@desc Register a new user
//route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, isAdmin } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists')
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        isAdmin
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
});

//@desc Logout user
//route POST /api/users/logout
//@access Public

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({ message: 'User logged out' });
});

//@desc Get user profile
//route GET /api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
    };

    res.status(200).json(user);
});
//@desc Update user profile
//route PUT /api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user){
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;

        if (req.body.password){
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id, 
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastNamestName,
            email: updatedUser.email,
        });
    } else {
        res.status(404);
        throw new Error('User not found')
    }
});


export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };