import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL

const addUserToDB = (payload) => {
    return axios.post(`${apiUrl}/user`, { payload })
}

// Read User
export const getUser = (payload) => {
    return axios.get(`${apiUrl}/user/${payload}`);
}

// Create Invoice
export const addInvoiceToDB = (payload) => {
    return axios.post(`${apiUrl}/invoice`, payload);
}

// Read Invoice
export const getInvoice = (payload) => {
    return axios.get(`${apiUrl}/invoice/${payload}`);
}

// Delete Invoice
export const deleteInvoice = (payload) => {
    return axios.delete(`${apiUrl}/invoice`, payload);
}

// Chage Invoice status
export const changeInvoiceStatus = (payload) => {
    return axios.put(`${apiUrl}/invoice/${payload}`);
}
export default addUserToDB