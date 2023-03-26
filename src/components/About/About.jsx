import React from "react";

const About = () => {
  return (
    <div className="w-9/12 mx-auto my-10">
      <h1 className="text-[42px] font-[500] text-[#333333] wow animate__animated animate__backInDown">
        Giới thiệu
      </h1>
      <div className="flex mt-10 ">
        <div className="w-1/2 pr-12">
          <p className="text-[15px] text-[#4A4A4A] wow animate__animated animate__backInLeft tracking-widest  mb-10  ">
            Khan’s Pet được xây dựng dựa trên tiêu chí là cổng thông tin khổng
            lồ và hoàn toàn miễn phí về các vấn đề xung quanh động vật , đặc
            biệt là thú cưng, cụ thể như các bệnh về chó mèo, các thực phẩm dinh
            dưỡng dành cho thú cưng, cách chăm sóc và điều trị bệnh cho chó
            mèo...
          </p>
          <p className="text-[15px] text-[#4A4A4A] wow animate__animated animate__backInLeft  tracking-widest">
            Tất cả những thông tin tại Monspet được sưu tầm và tham khảo từ
            nhiều nguồn khác nhau có chọn lọc, bên cạnh đó còn là trải nghiệm
            thực tế của chúng tôi trong quá trình nuôi thú cưng để đem đến cho
            độc giả những thông tin chính xác và hữu ích nhất.
          </p>
        </div>
        <div className="w-1/2 wow animate__animated animate__backInRight">
          <img
            src="./assets/images/shaking-hands8.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
      </div>
      <button className="wow animate__animated animate__backInLeft  px-10 py-3 rounded-[24px] border-solid border-2 border-black hover:scale-105 transition-all ease-linear">
        CHI TIẾT
      </button>
    </div>
  );
};

export default About;
