import React from "react";

const TagCircle = ({ color }) => {
  return (
    <span
      style={{ backgroundColor: color }}
      className="w-7 h-7 rounded-full inline-block"
    ></span>
  );
};

export default TagCircle;
