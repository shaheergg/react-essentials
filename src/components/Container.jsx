import React from "react";

function Container({ children }) {
  return (
    <div className="container mx-auto px-4" style={{ maxWidth: "1200px" }}>
      {children}
    </div>
  );
}

export default Container;
