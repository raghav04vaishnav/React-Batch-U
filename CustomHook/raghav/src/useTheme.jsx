import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("status") || "light");

  console.log(">>>>>>>>>>", localStorage.getItem("status"));

  useEffect(() => {
    if (theme === "dark") {
      console.log("11111111111111", theme);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      localStorage.setItem("status", "dark");
    } else {
      console.log("2222222222222", theme);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "blue";
      localStorage.setItem("status", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return { theme, toggleTheme };
}

export default useTheme;
