import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={loading}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}
