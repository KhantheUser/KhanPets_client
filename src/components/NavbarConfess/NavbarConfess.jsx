import React from "react";
import "./NavbarConfess.scss";
import { useNavigate } from "react-router-dom";
import Popover from "@material-ui/core/Popover";

import {
  Person,
  Search,
  Chat,
  Notifications,
  ExitToApp,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
function NavbarConfess() {
  const { currentUser } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const navigate = useNavigate();
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => navigate("/")}
        >
          <ExitToApp
            className="hover:opacity-80"
            style={{
              transform: "rotate(180deg)",
              fontSize: "24px",
              color: "white",
              marginLeft: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          />
        </span>

        <span className="logo text-[#f141aa] hidden lg:block">
          Pet Confession
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar hidden lg:flex">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend ,post or video"
            className="searchInput "
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div
            className="topbarIconItem"
            onClick={() => navigate("/messenger")}
          >
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <div aria-describedby={id} onClick={handleClick} className={`${currentUser?._id ? 'block':'hidden'}`}>
          <img
            src={`${currentUser?.avatar || "/assets/images/defaultavatar.jpg"}`}
            alt=""
            className="topbarImg"
          />
        </div>
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
          <div
            onClick={() => navigate("/")}
            className="py-2 px-6 cursor-pointer hover:bg-gray-300 transition-all ease-linear duration-300"
          >
            Trang chủ
          </div>
          <div className="py-2 px-6 cursor-pointer hover:bg-gray-300 transition-all ease-linear duration-300">
            Đăng xuất
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default NavbarConfess;
