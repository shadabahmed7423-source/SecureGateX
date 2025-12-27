import User from "../Models/User.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: users,
            count: users.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error while retrieving users",
            error: error.message
        });
    }
};

export const updateUserRole = async (req, res) => {
    const { role } = req.body;
    const { id } = req.params;

    if (!id || !role) {
        return res.status(400).json({
            success: false,
            message: "User ID and role are required"
        });
    }

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        user.role = role;
        await user.save();

        res.status(200).json({
            success: true,
            message: "User role updated successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error while updating user role",
            error: error.message
        });
    }
}
