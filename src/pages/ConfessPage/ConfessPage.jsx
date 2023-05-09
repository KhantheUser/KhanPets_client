import React from "react";
import Feed from "../../components/Feed/Feed";
import NavbarConfess from "../../components/NavbarConfess/NavbarConfess";

import Sidebar from "../../components/Sidebar/Sidebar";
import "./ConfessPage.scss";

function ConfessPage() {
  return (
    <div className="confessPage">
      <NavbarConfess />
      <div className="confessContainer">
        <Sidebar />
        <Feed />
  
        <div className="flex-[3.5]"></div>
      </div>
    </div>
  );
}

export default ConfessPage;
