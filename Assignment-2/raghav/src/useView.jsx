import { useState } from "react";

function useView() {
  const [view, setView] = useState("card");

  const viewToggle = () => {
    setView((view) => (view === "card" ? "table" : "card"));
  };
  return { view, viewToggle };
}
export default useView;
