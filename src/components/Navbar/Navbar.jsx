import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  ArrowDropDown,
  AccountCircle,
  CreditCard,
  ShoppingCartOutlined,
  Store,
  PostAdd,
  MessageOutlined,
  ExitToApp,
  DehazeOutlined,
  Close,
} from "@material-ui/icons";
import { Popover } from "@material-ui/core";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const navigationLink = [
    {
      id: 1,
      title: "Thú cưng",
      image: "https://cdn-icons-png.flaticon.com/512/3460/3460335.png",
      navigate: "/products",
    },
    {
      id: 0,
      title: "Thức ăn",
      image: "https://cdn-icons-png.flaticon.com/512/2927/2927347.png",
      navigate: "/food",
    },
    {
      id: 2,
      title: "Cộng đồng",
      image: "https://cdn-icons-png.flaticon.com/512/3090/3090423.png",
      navigate: "/confession",
    },
    {
      id: 3,
      title: "Tin tức",
      image: "https://cdn-icons-png.flaticon.com/512/2965/2965879.png",
      navigate: "/news",
    },
    {
      id: 4,
      title: "Đơn hàng",
      image: "https://cdn-icons-png.flaticon.com/512/1649/1649577.png",
      navigate: "/checkout/me",
    },
    {
      id: 5,
      title: "Giỏ hàng",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/1200px-Shopping_cart_icon.svg.png",
      navigate: "/cart/me/" + currentUser?._id,
    },
    {
      id: 6,
      title: "Đăng bán",
      image: "https://cdn-icons-png.flaticon.com/512/2649/2649263.png",
      navigate: "/create",
    },
    {
      id: 7,
      title: "Tin nhắn",
      image: "https://cdn-icons-png.flaticon.com/512/4144/4144845.png",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open2, setOpen2] = useState(false);
  const handleClose2 = (e) => {
    e.stoppropagation();
    setOpen2(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="navbar ">
      <Modal
        open={open2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpen2(false);
            }}
            className=" h-screen w-screen "
            style={{ background: "#f7f7f7" }}
          >
            <div className="">
              <div
                className="h-10 flex justify-end cursor-pointer"
                onClick={(e) => handleClose2(e)}
              >
                <Close className="text-gray-400" fontSize="large" />
              </div>
              <div className="flex flex-wrap justify-evenly">
                {navigationLink.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(item.navigate);
                    }}
                    className="w-5/12 h-20 bg-white rounded-lg p-3 mb-2 cursor-pointer"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                    }}
                  >
                    <span className="font-medium">{item.title}</span>
                    <img height={30} width={30} src={item.image} alt="" />
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  if (currentUser) {
                    localStorage.clear();
                    window.location.reload();
                  } else {
                    navigate("/login");
                  }
                }}
                className="block bg-gray-300 w-10/12 mx-auto p-3 rounded-md font-medium"
              >
                {currentUser ? "Đăng xuất" : "Đăng nhập"}
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
      <ul className="navbarList">
        <div className="logoImage cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="https://static.thenounproject.com/png/13421-200.png"
            alt=""
          />
        </div>
        <li
          className="navbarItem hidden md:block "
          onClick={() => navigate("/products")}
        >
          Thú cưng
        </li>
        <li
          className="navbarItem hidden md:block"
          onClick={() => navigate("/food")}
        >
          Thức ăn
        </li>
        <li className="navbarItem hidden md:block">
          <h1 className="logo text-[30px]" onClick={() => navigate("/")}>
            Khan Pets
          </h1>
        </li>
        <li
          className="navbarItem hidden md:block"
          onClick={() => navigate("/confession")}
        >
          Cộng đồng
        </li>
        <li
          className="navbarItem hidden md:block"
          onClick={() => navigate("/news")}
        >
          Tin tức
        </li>
      </ul>
      {currentUser ? (
        <>
          <div className="infoImage flex">
            <div
              className="imageContain  hidden md:block"
              style={{ border: "2px solid #fda401" }}
              onClick={handleClick}
            >
              <img
                src={`${
                  currentUser?.avatar || "/assets/images/defaultavatar.jpg"
                }`}
                alt=""
              />
            </div>
            <span className="hidden md:block">
              <ArrowDropDown style={{ color: "#fda401" }} />
            </span>
            <div className="md:hidden" onClick={() => setOpen2(true)}>
              <DehazeOutlined className="text-black " fontSize="large" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="info hidden md:flex "
            onClick={() => navigate("/login")}
          >
            <AccountCircle style={{ color: "#fda401", fontSize: "30px" }} />
            <p className="infoTitle font-light">Login</p>
          </div>
          <div
            className="md:hidden absolute top-[50%] right-[2%] cursor-pointer translate-y-[-50%]"
            onClick={() => setOpen2(true)}
          >
            <DehazeOutlined className="text-black " fontSize="large" />
          </div>
        </>
      )}

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

            <span onClick={() => navigate("/cart/me/" + currentUser?._id)}>
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
