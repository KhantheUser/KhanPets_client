import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ArrowDropDown,
  AccountCircle,
  CreditCard,
  ShoppingCartOutlined,
  Store,
  PostAdd,
  MessageOutlined,
  ExitToApp,
} from "@material-ui/icons";
import { Popover } from "@material-ui/core";
function Navbar() {
  const { currentUser } = useSelector((state) => state.user);

  const [visibleModal, setVisibleModal] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
          <div
            className="imageContain"
            style={{ border: "2px solid #fda401" }}
            onClick={handleClick}
          >
            <img
              src={`${
                currentUser.avatar || "/assets/images/defaultavatar.jpg"
              }`}
              alt=""
            />
          </div>
          <span>
            <ArrowDropDown style={{ color: "#fda401" }} />
          </span>
        </div>
      ) : (
        <div className="info" onClick={() => navigate("/login")}>
          <AccountCircle style={{ color: "#fda401", fontSize: "30px" }} />
          <p className="infoTitle font-light">Login</p>
          {/* <p className="infoTitle" onClick={() => navigate("/register")}>
            Register
          </p> */}
        </div>
      )}

      {/* <div
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
      </div> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="p-2 w-[200px]">
          <div
            className=" flex justify-center py-3 navbar-tab-item"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <CreditCard
              className="icon-tab-item"
              style={{ color: "#fda401", marginRight: "3px" }}
            />
            <span onClick={() => navigate("/checkout/me")}>Đơn hàng</span>
          </div>
          <div
            className=" flex justify-center py-3 navbar-tab-item"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <ShoppingCartOutlined
              className="icon-tab-item"
              style={{ color: "#fda401", marginRight: "3px" }}
            />

            <span onClick={() => navigate("/cart/me/" + currentUser._id)}>
              Giỏ hàng
            </span>
          </div>
          <div
            className=" flex justify-center py-3 navbar-tab-item"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <Store
              className="icon-tab-item"
              style={{ color: "#fda401", marginRight: "3px" }}
            />
            <span onClick={() => navigate("/create")}>Đăng bán</span>
          </div>
          <div
            className=" flex justify-center py-3 navbar-tab-item"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <PostAdd
              className="icon-tab-item"
              style={{ color: "#fda401", marginRight: "3px" }}
            />
            <span onClick={() => navigate("/confession")}>Bài đăng</span>
          </div>
          <div
            className=" flex justify-center py-3 navbar-tab-item"
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <MessageOutlined
              className="icon-tab-item"
              style={{ color: "#fda401", marginRight: "3px" }}
            />
            <span onClick={() => navigate("/messenger")}>Tin nhắn</span>
          </div>
          <div className=" flex justify-center py-3 navbar-tab-item">
            <ExitToApp
              className="icon-tab-item"
              style={{ color: "#fda401", marginRight: "3px" }}
            />
            <span
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Đăng xuất
            </span>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default Navbar;
