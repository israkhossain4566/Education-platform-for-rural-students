


/*
export const protectRoute = async (req, res, next) => {
    try {
        console.log("Request headers:", req.headers);
        console.log("Request cookies:", req.cookies);
        const token = req.cookies.JWT || req.headers.authorization?.split(' ')[1];
        console.log("Extracted token:", token);
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        // Verify the token
        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded._id) {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }

        // Find user by ID from the token payload
        const user = await userModel.findById(decoded._id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach user to request object
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
*/
/*
export const protectRoute = async (req, res, next) => {
    try {
        console.log("Request headers:", req.headers);
        console.log("Request cookies:", req.cookies);
        
        // Update this line to correctly extract the token from the 'token' cookie
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        console.log("Extracted token:", token); // Log the extracted token

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded._id) {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }

        const user = await userModel.findById(decoded._id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

*/
import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';


export const protectRoute = async (req, res, next) => {
    try {
        console.log("Request headers:", req.headers);
        console.log("Request cookies:", req.cookies);

        // Update to correctly extract the token from cookies or headers
        const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
        console.log("Extracted token:", token); // Log the extracted token

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        const decoded = JWT.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded._id) {
            return res.status(401).json({ error: "Unauthorized - Invalid token" });
        }

        const user = await userModel.findById(decoded._id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
