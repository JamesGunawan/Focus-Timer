import { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Effect to apply/remove dark mode class
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]); // Runs when `darkMode` state changes

    return (
        <>
        <label className="switch">
            <input 
                type="checkbox" 
                checked={darkMode} // makes this a controlled component by react instead of the brpwser DOM
                onChange={() => setDarkMode(prevMode => !prevMode)} 
            />
            <span className="slider"></span>
        </label>
        <p className="darkmode-info">Toggle Darkmode</p>
        </>
    );
};

export default DarkModeToggle;
