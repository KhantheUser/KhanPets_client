import React from "react";
import "./Success.scss";
import { useNavigate } from "react-router-dom";
function Success() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center success">
      <div
        className="w-3/6 h-[500px]  mx-auto rounded-md"
        style={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 10px" }}
      >
        <h2 className=" heading text-2xl text-[#fda401] py-3 text-center">
          Thank you for purchasing
        </h2>
        <img
          src="https://c3kienthuyhp.edu.vn/wp-content/uploads/2022/12/1672387568_612_220-Hinh-Anh-CUTE-Moi-Chi-Nhin-Thoi-Da-Thay.gif"
          alt="sss"
          className="h-[350px] mx-auto"
        />
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/checkout/me")}
            className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Đơn hàng của bạn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
