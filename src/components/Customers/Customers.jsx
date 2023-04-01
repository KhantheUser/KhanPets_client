import React from "react";
import "./Customer.scss";
const Customers = () => {
  return (
    <div className="pt-16">
      <div className="w-8/12 mx-auto mb-24">
        <div className="relative  ">
          <img
            src="/assets/images/5.webp"
            width={560}
            alt=""
            className="wow animate__animated animate__slideInLeft"
          />
          <div className="absolute bg-[#8b6357] top-[10%] right-[4%] hidden md:block w-[460px] p-12 wow animate__animated animate__slideInRight">
            <h2 className="font-semibold text-[40px] text-white pb-4">
              Hi, I’m Khan
            </h2>
            <p className="text-[15px] font-extralight leading-8 text-white">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you. This
              is a great space to write a long text about your company and your
              services. You can use this space to go into a little more detail
              about your company..
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#363c45] h-[280px] flex justify-center items-center flex-col">
        <h2 className="font-semibold text-[40px] py-4  text-white">
          My Happy Clients
        </h2>
        <p className="text-[20px] font-extralight text-white">
          Follow Us @Khan_theUser
        </p>
      </div>
      <div className="  flex overflow-x-auto p-3 custom-snackbar relative">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <img
            className="customer-image"
            key={index}
            width={296}
            src={`/assets/images/0${item}.jpg`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;
