import { createContext, useContext, useState, useEffect } from "react";

const PasswordContext = createContext();

export const usePassword = () => useContext(PasswordContext);

export const PasswordProvider = ({ children }) => {
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        const access = sessionStorage.getItem("hasAccess");
        if (access === "true") {
            setHasAccess(true);
        }
    }, []);

    const verifyPassword = (inputPassword) => {
        const correctPassword = "Codersh.Ca"; // you can obfuscate this if needed
        if (inputPassword === correctPassword) {
            sessionStorage.setItem("hasAccess", "true");
            setHasAccess(true);
            return true;
        }
        return false;
    };

    const value = { hasAccess, verifyPassword };

    return (
        <PasswordContext.Provider value={value}>
            {children}
        </PasswordContext.Provider>
    );
};
