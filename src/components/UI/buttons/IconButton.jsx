import React, { memo } from "react";

const IconButton = memo(({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
});

export default IconButton;
