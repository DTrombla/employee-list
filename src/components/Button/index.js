import React from "react";

function Button({ type = "default", onClick }) {
  return (
    <button onClick={onClick} className={["btn btn-lg", `btn-${type}`].join(" ")}>
      Sort Alphabetically
    </button>
  );
}

export default Button;
