import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

const ModalWrapper = ({ isOpen, closeModal, children }) => {
  const transitionRef = useRef(null);

  useOnClickOutside(transitionRef, closeModal);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={transitionRef}
      timeout={300}
      classNames="popup"
      unmountOnExit
    >
      <div className="fixed z-20 top-0 left-0 w-full h-screen bg-todo-gray/20">
        <div ref={transitionRef} className="w-fit mx-auto mt-32">
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalWrapper;
