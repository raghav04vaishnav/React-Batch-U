import { useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);

    if (!theme) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return { theme, toggleTheme };
}

export default useTheme;
