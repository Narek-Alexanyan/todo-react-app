import React, { Children, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const ModalWrapper = ({ isOpen, children }) => {
  const modalRef = useRef(null);
  return (
    <div className="relative w-full h-screen bg-todo-gray">
      <CSSTransition
        in={isOpen}
        modalRef={modalRef}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div ref={modalRef} className="fixed top-1/2 left-1/2">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default ModalWrapper;
