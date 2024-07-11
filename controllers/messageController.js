
import conversationModel from "../models/conversationModel.js";
import messageModel from "../models/messageModel.js";
import mongoose from "mongoose";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { _id: receiverId } = req.params; // Ensure route uses /send/:id to pass receiverId
        const senderId = req.user._id;

        // Log request details to debug
        console.log("Request parameters:", req.params);
        console.log("Receiver ID:", receiverId);
        console.log("Sender ID:", senderId);

        // Find or create conversation
        let conversation = await conversationModel.findOne({
            participants: {
                $all: [senderId, receiverId]
            },
        });

        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, receiverId],
            });
        }

        // Create new message
        const newMessage = new messageModel({
            senderId,
            receiverId, // Ensure receiverId is correctly set
            message,
        });

        // Save the new message
        await newMessage.save();

        // Add the new message ID to the conversation
        conversation.messages.push(newMessage._id);


        //socket i.o. will go here
        await conversation.save();

        // Respond with the new message
        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
/*
export const getMessage = async (req, res) => {
    try {
        const { _id: userToChatId } = req.params; 
        const senderId = req.user._id;

        // Log request details to debug
        console.log("Request parameters:", req.params);
        console.log("userToChatId ID:", userToChatId);
        console.log("Sender ID:", senderId);

        // Find or create conversation
        const conversation = await conversationModel.findOne({
            participants: {
                $all: [senderId,userToChatId ]
            },
        }).populate("messages");
        if (!conversation)
             return res.status(200).json([]);
            
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.error("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
*/
/*
export const getMessage = async (req, res) => {
    try {
        const { _id: userToChatId } = req.params; 
        const senderId = req.user._id;

        console.log("Request parameters:", req.params);
        console.log("userToChatId ID:", userToChatId);
        console.log("Sender ID:", senderId);

        const conversation = await conversationModel.findOne({
            participants: {
                $all: [senderId, userToChatId]
            },
        }).populate("messages");

        if (!conversation) {
            console.log("No conversation found between users");
            return res.status(200).json([]);
        }

        console.log("Conversation found:", conversation);
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.error("Error in getMessage controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
*/
export const getMessage = async (req, res) => {
    try {
        const { _id: userToChatId } = req.params; 
        const senderId = req.user._id;

        // Log request details to debug
        console.log("Request parameters:", req.params);
        console.log("userToChatId ID:", userToChatId);
        console.log("Sender ID:", senderId);

        // Check if both sender and receiver IDs are valid ObjectIds
        if (!mongoose.Types.ObjectId.isValid(userToChatId) || !mongoose.Types.ObjectId.isValid(senderId)) {
            return res.status(400).json({ error: "Invalid user IDs" });
        }

        // Find or create conversation
        const conversation = await conversationModel.findOne({
            participants: {
                $all: [senderId, userToChatId]
            },
        }).populate("messages");

        if (!conversation) {
            console.log("No conversation found between users");
            return res.status(200).json([]);
        }

        console.log("Conversation found:", conversation);
        res.status(200).json(conversation.messages);
    } catch (error) {
        console.error("Error in getMessage controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
