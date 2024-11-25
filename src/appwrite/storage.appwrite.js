import { storage, ID } from "./appwrite.config";
const bucketId = import.meta.env.VITE_BUCKET_ID;
const projectId = import.meta.env.VITE_PROJECT_ID
const uniqueId = ID.unique();

export const upload = async (payload) => {
    const file = await storage.createFile(bucketId, uniqueId, payload);
    const fileUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${file.$id}/preview?project=${projectId}`;

    return fileUrl;
};





