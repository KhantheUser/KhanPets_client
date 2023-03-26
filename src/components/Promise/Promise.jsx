import React from "react";

const Promises = () => {
  const promises = [
    {
      id: 1,
      image: "https://monspet.com/wp-content/uploads/2019/07/i1-1.png",
      title: "Nội dung",
      desc: "Nội dung chất lượng, chính xác, có nguồn uy tín, có thú y xem xét.",
    },
    {
      id: 2,
      image: "https://monspet.com/wp-content/uploads/2019/07/i2-1.png",
      title: "Sản phẩm",
      desc: "Sản phẩm được gợi ý công bằng, được phân tích review chi tiết chính xác.",
    },
    {
      id: 3,
      image: "https://monspet.com/wp-content/uploads/2019/07/i3-1.png",
      title: "Hỗ trợ",
      desc: "Hỗ trợ hết mình, hướng dẫn những nguồn khám bệnh thú cưng uy tín, chất lượng.",
    },
  ];
  return (
    <div className="bg-[#f7f7f7] ">
      <div className="w-9/12 mx-auto py-10">
        <div>
          <h1 className="text-[42px] font-[500] text-[#343c45] text-center wow animate__animated animate__zoomIn">
            Cam kết
          </h1>
          <p className="text-[#595959] text-[18px] tracking-widest leading-8 text-center my-5 wow animate__animated animate__zoomIn">
            Khan's Pet .Com được định hình là trang web thông tin hàng đầu về
            động vật, thú cưng. Chúng tôi cam kết tất cả nội dung cung cấp trên
            trang đều được trích dịch từ các nguồn web nước ngoài rõ ràng, có ý
            kiến và trích dẫn thú y. Từ đó mang lại những giải pháp chính xác
            nhất cho người xem.
          </p>
        </div>
        <div className="py-12 flex">
          {promises.map((pro) => (
            <div key={pro.id} className="w-1/3 ">
              <div className="flex flex-col  items-center px-6 wow animate__animated animate__zoomIn">
                <img
                  width="48"
                  height="48"
                  alt=""
                  data-src={pro.image}
                  className="attachment-full size-full ls-is-cached lazyloaded"
                  src={pro.image}
                />
                <h3 className="text-[#333333] text-[22px] font-medium mb-3 mt-10">
                  {pro.title}
                </h3>
                <p className="text-center text-[#707070] leading-8">
                  {pro.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promises;
