import React from "react";
import "./RipplePlay.scss";
const RipplePlay = ({ onClick }) => {
  return (
    <div onClick={onClick} class="circles absolute">
      <div class="circle1"></div>
      <div class="circle2"></div>
      <div class="circle3"></div>
    </div>
  );
};

export default RipplePlay;
