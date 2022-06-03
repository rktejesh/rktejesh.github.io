import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import "./style.css";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <button className="theme_button menu_button">
      <div className="nav_ac" onClick={themetoggle}>
        <WiMoonAltWaningCrescent4 />
      </div>
    </button>
  );
};

export default Themetoggle;
