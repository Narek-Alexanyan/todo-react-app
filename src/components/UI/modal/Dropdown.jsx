import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

const Dropdown = ({ isOpen, list, handleClick, setIsOpen }) => {
  const transitionRef = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={transitionRef}
      timeout={300}
      classNames="popup"
      unmountOnExit
    >
      <div
        ref={transitionRef}
        className="absolute z-10 bg-todo-white rounded-lg right-0 py-2"
      >
        {list.map((item) => (
          <div
            key={item.id}
            className="pl-6 pr-16 py-1 first:border-b first:border-todo-gray cursor-pointer text-sm text-todo-gray"
            onClick={() => handleClick(item.value)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default Dropdown;
