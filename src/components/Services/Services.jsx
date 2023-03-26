import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      image: "/assets/images/1.webp",
      title: "Full Grooming",
      desc: "This is a description ",
    },
    {
      id: 2,
      image: "/assets/images/2.webp",
      title: "Wash & Blow Dry",
      desc: "This is a description ",
    },
    {
      id: 3,
      image: "/assets/images/3.webp",
      title: "Self Serve Dog Wash",
      desc: "This is a description ",
    },
    {
      id: 4,
      image: "/assets/images/4.webp",
      title: "Nail Clipping",
      desc: "This is a description ",
    },
  ];
  return (
    <div className="my-4 bg-[#f7f7f7] py-8">
      <div className="w-8/12 mx-auto ">
        <h1 className="text-[42px] font-[500] pb-6 text-[#343c45] text-center wow animate__animated animate__zoomIn">
          Dịch vụ
        </h1>
        <div className="flex flex-wrap justify-between">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[45%] my-3 wow animate__animated animate__zoomIn"
            >
              <img src={service.image} alt={service.title} />
              <div>
                <h2 className="font-semibold text-center text-[24px] my-4 text-[#343c45]">
                  {service.title}
                </h2>
                <span className="font-extralight text-[20px] block text-center text-[#343c45]">
                  {service.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
