export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return;
    }
    catch (error) {
    }
};
//# sourceMappingURL=user-controllers.js.map