import userModel from "../models/Usermode.js"

export const Authentication = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Validation process
        if (!name) {
            return res.status(400).send({ message: "Please provide a name", success: false });
        }
        if (!email) {
            return res.status(400).send({ message: "Please provide an email", success: false });
        }
        if (!password) {
            return res.status(400).send({ message: "Please provide a password", success: false });
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).send({
                success: false,
                message: "Email already exists, please login."
            });
        }

        // if not Create a new user
        const user = await userModel.create({ name, email, password });
        return res.status(201).send({
            success: true,
            message: "User created successfully",
            user,
        });

    } catch (error) {
        console.error("Error in Register Control:", error);
        return res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
};
