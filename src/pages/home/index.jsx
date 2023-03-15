import React from "react";
import Logo from "../../components/Logo";
import BaseButton from "../../components/UI/buttons/BaseButton";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center py-20 px-2">
      <Logo />
      <h5 className="text-base text-center text-todo-gray w-96 max-w-full mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        voluptas molestias asperiores.
      </h5>
      <BaseButton className="mt-4" onClick={() => navigate("/todo")}>
        Get Started
      </BaseButton>
    </div>
  );
};

export default HomePage;
