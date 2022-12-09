import React from "react";

const Submit = () => {
  return (
    <div>
      <button
        className="submit-btn"
        style={{
          backgroundColor: "rgb(15, 125, 124)",
          padding: "10px 12px",
          border: "none",
          color: "white",
          borderRadius: "4px",
          fontWeight: "700",
          marginTop: "20px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export { Submit };
