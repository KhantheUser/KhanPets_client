import React from "react";
import { useNavigate } from "react-router-dom";
const BackToHome = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="text-white font-semibold absolute top-5  left-5 bg-gradient-to-r p-3 rounded-3xl from-[#a44d01] to-#e99311 hover:scale-105 transition ease-linear"
    >
      Back To Home
    </button>
  );
};

export default BackToHome;
