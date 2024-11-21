
const getImage = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error("No file provided"));
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result); // Return the Base64 string
        };
        reader.onerror = (error) => {
            reject(error); // Handle errors
        };
        reader.readAsDataURL(file); // Convert the file to Base64
    });
};


export default getImage