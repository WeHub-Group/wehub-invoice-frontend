import { account } from "./appwrite.config";

const getuserEmail = async () => {
    try {
        const user = await account.get();
        const userEmail = user.email;

        return { userEmail };
    } catch (error) {
        console.error("Error fetching user details:", error.message);
        return null;
    }
};

export default getuserEmail;
