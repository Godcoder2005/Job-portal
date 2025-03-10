import userModel from "../models/Usermode.js"

export const Authentication = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        //Validation process
        if (!name) {
           next('Name is required');
        }
        if (!email) {
            next('Email is required');
        }
        if (!password) {
            next('password is required and greater than 6 character');
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
           next('Email exist do direct login')
        }

        // if not Create a new user
        const user = await userModel.create({ name, email, password });
        return res.status(201).send({
            success: true,
            message: "User created successfully",
            user,
        });

    } catch (error) {
       next(error)
    }
};
