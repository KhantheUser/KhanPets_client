import React from "react";
import "./Banner_Info.scss";
export default function Banner_Info() {
  return (
    <div className="banner_info mt-10">
      <h1 className="text-[36px] font-[500]">Get more information</h1>
      <p className="text-center text-[16px] text-[#4A4A4A] tracking-widest my-4">
        Các thông tin hữu ích để chăm sóc thú cưng của bạn
      </p>
      <div className="banner_list">
        <Banner_Item
          title={"How to take care of your pet"}
          background={
            "https://www.petmart.vn/wp-content/uploads/2020/02/khach-san-cho-meo00.jpg"
          }
        />
        <Banner_Item
          title={"What do pets think about you?"}
          background={
            "https://www.petmart.vn/wp-content/uploads/2020/02/khach-san-cho-meo04.jpg"
          }
        />
        <Banner_Item
          title={"Perfume for dogs and cats"}
          background="https://www.petmart.vn/wp-content/uploads/2016/03/cach-cham-soc-cho-con-moi-sinh-phat-trien-khoe-manh.jpg"
        />
      </div>
    </div>
  );
}

function Banner_Item({ background, title }) {
  return (
    <div
      className="banner_item"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          pariatur consequatur totam! Aut impedit magni excepturi?
        </p>
      </div>
    </div>
  );
}
