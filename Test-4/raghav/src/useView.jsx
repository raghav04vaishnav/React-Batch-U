import React, { useState } from "react";

function useView() {
  const [view, setview] = useState("card");

  const viewToggle = () => {
    setview((view) => (view === "card" ? "table" : "card"));
  };
  return { view, viewToggle };
}

export default useView;