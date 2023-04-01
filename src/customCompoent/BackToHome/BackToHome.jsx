import React from "react";
import { useNavigate } from "react-router-dom";
import useResize from "../../util/useSize";
import { ArrowBack } from "@material-ui/icons";
const BackToHome = () => {
  const navigate = useNavigate();
  const size = useResize();
  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="z-10 text-white font-semibold absolute top-5  left-5 bg-gradient-to-r p-3 rounded-3xl from-[#a44d01] to-#e99311 hover:scale-105 transition ease-linear"
      >
        {size > 1024 ? (
          "Back To Home"
        ) : (
          <span>
            <ArrowBack />
          </span>
        )}
      </button>
    </>
  );
};

export default BackToHome;
