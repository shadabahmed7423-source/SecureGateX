import Token from "../Models/Token.js";
import jwt from "jsonwebtoken";

export const saveToken = async (userId, refreshToken) => {
    const decoded = jwt.decode(refreshToken);
    if (!decoded || !decoded.id) {
        throw new Error("Invalid refresh token");
    }

    const expiresAt = new Date(decoded.exp * 1000); 

    const token = await Token.create({ user: userId, token: refreshToken, expiresAt });

    return token;
}

export const removeToken = async (refreshToken) => {
    const token = await Token.deleteOne({ token: refreshToken });
    if (!token) {
        throw new Error("Token not found");
    }
    return token;
}

export const findToken = async (refreshToken) => {
    const token = await Token.findOne({ token: refreshToken });
    if (!token) {
        throw new Error("Token not found");
    }
    return token;
}   