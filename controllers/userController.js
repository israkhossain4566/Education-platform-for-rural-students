import userModel from '../models/userModel.js';
import tokenModel from '../models/tokenModel.js';
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await userModel.find({ _id: { $ne: loggedInUserId } }).select("-password -question -answer -phone -address");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

/*

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id.trim(); // Trim the user ID
    console.log(`Fetching user with ID: ${userId}`); // Log the user ID being fetched
    const user = await userModel.findById(userId).select('-password');
    if (!user) {
      console.log(`User not found with ID: ${userId}`); // Log if user not found
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error); // Log the error details
    res.status(500).json({ message: 'Server error' });
  }
};
*/
export const getUserById = async (req, res) => {
    try {
      const userId = req.params.id.trim();
      console.log(`Fetching user with ID: ${userId}`);
      
      const user = await userModel.findById(userId).select('-password');
      if (!user) {
        console.log(`User not found with ID: ${userId}`);
        return res.status(404).json({ message: 'User not found' });
      }
  
      console.log(`User found: ${user}`);
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

export const verifyEmail = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({ message: "Invalid link - user not found" });

        const token = await tokenModel.findOne({
            userId: user._id,
            token: req.params.token
        });
        if (!token) return res.status(400).send({ message: "Invalid link - token not found" });

        user.verified = true;
        await user.save();

        //await tokenModel.deleteOne({ _id: token._id });

        res.status(200).json({
            success: true,
            message: 'Email verified successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                question: user.question,
                answer: user.answer,
                gender: user.gender
            },
        });
    } catch (error) {
        console.error('Error in verification:', error);
        res.status(500).json({ success: false, message: 'Error in verification' });
    }
};
