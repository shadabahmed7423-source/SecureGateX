import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import generateTokens from "../utils/generateTokens.js";
import { saveToken, removeToken, findToken } from "../services/tokenService.js";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: true, message: "User already exists" });
        }

        const user = await User.create({ name, email, password });
        if (!user) {
            return res.status(400).json({ success: false, message: "User registration failed" });
        }

        const tokens = generateTokens(user._id);
        saveToken(user._id, tokens.refreshToken).catch(err => {
            console.error("Error saving refresh token:", err);
        });

        if (!tokens) {
            return res.status(500).json({ success: false, message: "Token generation failed" });
        }

        res.status(201).json({ success: true, message: "User registered successfully", data: user, ...tokens });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const tokens = generateTokens(user._id);
        await saveToken(user._id, tokens.refreshToken);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(200).json({ success: true, message: "User logged in successfully", data: user, ...tokens });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ success: false, message: "No refresh token provided" });
    }

    try {
        const tokenData = await findToken(refreshToken);
        if (!tokenData) {
            return res.status(401).json({ success: false, message: "Invalid refresh token" });
        }

        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const newTokens = generateTokens(decoded.id);

        await removeToken(refreshToken);
        await saveToken(decoded.id, newTokens.refreshToken);

        res.status(200).json({ success: true, message: "Tokens refreshed successfully", ...newTokens });
    } catch (error) {
        console.error("Error refreshing token:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const logoutUser = async (req, res) => {
    try {
        await removeToken(req.body.refreshToken);
        res.status(200).json({ success: true, message: "User logged out successfully" });
    } catch (error) {
        console.error("Error logging out user:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            message: "User profile fetched successfully",
            data: user,
        });
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

