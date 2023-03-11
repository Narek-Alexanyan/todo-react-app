import React from "react";

const IconButton = ({ className, children, onClick }) => {
  return <button className={className} onClick={onClick}>{children}</button>;
};

export default IconButton;
