import { databases, ID } from "./appwrite.config";

const db = {}

const collections = [
    {
        dbId: import.meta.env.VITE_DB_ID,
        id: import.meta.env.VITE_USERS_COLLECTION_ID,
        name: 'users'
    }
]

collections.forEach((col) => {
    db[col.name] = {
        create: (payload, id = ID.unique()) =>
            databases.createDocument(
                col.dbId,
                col.id,
                id,
                payload
            ),

    }
})

export default db;