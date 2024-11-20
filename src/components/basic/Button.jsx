import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa6";

// Global counter to generate unique IDs
let buttonCounter = 0;

// Registry to store the state setters for each button
const buttonsRegistry = new Map();

const Button = ({ onClick, defaultText, ...props }) => {
    const [isLoading, setIsLoading] = useState(false);

    // Generate a unique ID for this button
    const uniqueId = `button-${++buttonCounter}`;

    useEffect(() => {
        // Register this button's state setter
        buttonsRegistry.set(uniqueId, setIsLoading);

        return () => {
            // Cleanup when the button unmounts
            buttonsRegistry.delete(uniqueId);
        };
    }, [uniqueId]);

    return (
        <button
            {...props}
            onClick={(e) => {
                if (!isLoading && onClick) {
                    onClick(e);
                }
            }}
        >
            {isLoading ? (
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <FaSpinner />
                </motion.div>
            ) : (
                defaultText
            )}
        </button>
    );
};

// Static method to change loading state globally
Button.changeStatus = (status) => {
    buttonsRegistry.forEach((setIsLoading) => setIsLoading(status));
};

export default Button;
