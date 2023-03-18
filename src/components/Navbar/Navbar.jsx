import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ArrowDropDown } from "@material-ui/icons";
function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  const [visibleModal, setVisibleModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <ul className="navbarList">
        <div className="logoImage cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="https://static.thenounproject.com/png/13421-200.png"
            alt=""
          />
        </div>
        <li className="navbarItem" onClick={() => navigate("/products")}>
          Thú cưng
        </li>
        <li className="navbarItem" onClick={() => navigate("/food")}>
          Thức ăn
        </li>
        <li className="navbarItem ">
          <h1 className="logo text-[30px]" onClick={() => navigate("/")}>
            Khan Pets
          </h1>
        </li>
        <li className="navbarItem" onClick={() => navigate("/confession")}>
          Cộng đồng
        </li>
        <li className="navbarItem" onClick={() => navigate("/confession")}>
          Tin tức
        </li>
      </ul>
      {currentUser ? (
        <div className="infoImage" onClick={() => setVisibleModal(true)}>
          <span>Hello {currentUser.username}</span>
          <div className="imageContain">
            <img
              src={`${
                currentUser.avatar || "/assets/images/defaultavatar.jpg"
              }`}
              alt=""
            />
          </div>
          <span>
            <ArrowDropDown color="black" />
          </span>
        </div>
      ) : (
        <div className="info">
          <p className="infoTitle" onClick={() => navigate("/login")}>
            Login
          </p>
          <p className="infoTitle" onClick={() => navigate("/register")}>
            Register
          </p>
        </div>
      )}

      <div
        className="modalSettings"
        onClick={() => setVisibleModal(false)}
        style={{ display: `${visibleModal ? "block" : "none"}` }}
      >
        <div className="modalSlide">
          <ul>
            <div>
              <li onClick={() => navigate("/checkout/me")}>Đơn hàng</li>
            </div>
            <div>
              <li onClick={() => navigate("/cart/me/" + currentUser._id)}>
                Giỏ hàng
              </li>
            </div>
            <div>
              <li onClick={() => navigate("/create")}>Đăng bán</li>
            </div>
            <div>
              <li onClick={() => navigate("/confession")}>Bài đăng</li>
            </div>
            <div>
              <li onClick={() => navigate("/messenger")}>Tin nhắn</li>
            </div>
            <div>
              <li
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Đăng xuất
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
