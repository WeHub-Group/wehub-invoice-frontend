import { Query } from "appwrite";
import { databases, ID } from "./appwrite.config";

const db = {}

const collections = [
    {
        dbId: import.meta.env.VITE_DB_ID,
        id: import.meta.env.VITE_USERS_COLLECTION_ID,
        name: 'users'
    },
    {
        dbId: import.meta.env.VITE_DB_ID,
        id: import.meta.env.VITE_INVOICES_COLLECTION_ID,
        name: 'invoices'
    }
]

collections.forEach((col) => {
    db[col.name] = {
        // User
        create: (payload, id = ID.unique()) =>
            databases.createDocument(
                col.dbId,
                col.id,
                id,
                payload
            ),
        getUserDetails: (userId) =>
            databases.listDocuments(
                col.dbId,
                col.id,
                [Query.equal('userId', userId)]
            ),

        // Invoice
        addInvoice: (payload, id = ID.unique()) =>
            databases.createDocument(
                col.dbId,
                col.id,
                id,
                payload
            ),
        getAllInvoices: () =>
            databases.listDocuments(
                col.dbId,
                col.id,
                [Query.equal('$id', '67490b7b002c16a5ba74')]
            )

    }
})

export default db;