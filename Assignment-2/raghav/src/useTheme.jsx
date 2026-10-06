import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("status") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      localStorage.setItem("status", "dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      localStorage.setItem("status", "light");
    }

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toggleTheme,
  };
}

export default useTheme;
