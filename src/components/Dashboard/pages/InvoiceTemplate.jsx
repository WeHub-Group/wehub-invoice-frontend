import { useState } from "react"

const Invoice = () => {
    const [invoice, setInvoice] = useState({
        invoiceId: '',
        billFrom: '',
        billTo: '',
        profilePicUrl: '',
        recipientEmail: '',
        recipientAddress: '',
        title: '',
        issuedOn: '',
        dueDate: '',
        terms: '',
        items: [
            {
                itemName: "", itemRate: "", itemQuantity: ""
            }
        ]
    })

    return (
        <div>Invoice</div>
    )
}

export default Invoice