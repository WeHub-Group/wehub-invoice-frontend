import { account } from "./appwrite.config";

const getUserId = async () => {
    try {
        const user = await account.get();
        const userId = user.$id;
        const userEmail = user.email;

        return { userId, userEmail };
    } catch (error) {
        console.error("Error fetching user details:", error.message);
        return null;
    }
};

export default getUserId;
