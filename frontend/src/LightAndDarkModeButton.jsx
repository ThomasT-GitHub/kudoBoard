import { useState } from "react";

function LightAndDarkModeButton() {
    const [isLightMode, setisLightMode] = useState(true);

    const toggleLightMode = () => {
        const root = document.documentElement;
        if (!isLightMode) {
            root.style.setProperty("--background-color", "white");
            root.style.setProperty("--text-color", "black");
            setisLightMode(true);
        } else {
            root.style.setProperty("--background-color", "black");
            root.style.setProperty("--text-color", "white");
            setisLightMode(false);
        }

    }

    return (
        <>
            <button className="LightAndDarkModeButton" onClick={toggleLightMode}>Light/Dark Mode</button>
        </>
    );
}

export default LightAndDarkModeButton
