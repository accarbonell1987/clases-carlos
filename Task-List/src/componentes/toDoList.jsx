import React, { useState } from "react";

const stlye = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "5px",
  padding: "10px",
};

const ToDOList = ({
  name = "",
  remove = () => {},
  completed = false,
  handleCheck = () => {},
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        backgroundColor: completed ? "gray" : "orange",
      }}
    >
      <input
        type="radio"
        checked={completed}
        onChange={(e) => handleCheck(e)}
      />
      <label>{name}</label>
      <button onClick={remove} className="btn">
        Delete
      </button>
    </div>
  );
};
export default ToDOList;
