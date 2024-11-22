import { storage, ID } from "./appwrite.config";
const bucketId = import.meta.env.VITE_BUCKET_ID;
const uniqueId = ID.unique();

export const upload = (payload) => {
    return storage.createFile(bucketId, uniqueId, payload);
};

export const download = (fileId) => {
    return storage.getFileDownload(bucketId, fileId);
}




