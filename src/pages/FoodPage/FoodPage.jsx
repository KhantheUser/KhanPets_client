import { Paper, Zoom } from "@material-ui/core";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { KeyboardArrowDown } from "@material-ui/icons";
import ReactPlayer from "react-player";
const FoodPage = () => {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const handleChange = (param) => {
    if (param === 1) {
      setChecked((prev) => !prev);
    } else {
      setChecked2((prev) => !prev);
    }
  };
  const arrayNews = [
    {
      id: 1,
      title: "Giống chó Alaskan Malamute: khổng lồ liệu giá có rẻ?",
    },
    {
      id: 2,
      title: "Hãy dừng lại nếu bạn đang cho chó mèo ăn chay",
    },
    {
      id: 3,
      title: "Chu kỳ kinh nguyệt của chó cái (sa lơ) bao nhiêu ngày?",
    },
    {
      id: 4,
      title: "Tẩy giun cho chó và những điều bạn cần phải biết",
    },
    {
      id: 5,
      title: "Phải làm sao khi chó bị đau chân và đi khập khiễng?",
    },
  ];
  const arrayProducts = [
    {
      id: 1,
      imageUrl:
        "https://www.petmart.vn/wp-content/uploads/2019/04/xuong-cho-cho-gam-lam-sach-rang-vegebrand-360-bone-prevent-tartar-300x300.jpg",
      price: 5000,
      title:
        "Xương cho chó gặm làm sạch răng VEGEBRAND 360 Bone Prevent Tartar",
    },
    {
      id: 2,
      imageUrl:
        "https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-con-co-nho-royal-canin-mini-puppy1-300x300.jpg",
      price: 215000,
      title: "Thức ăn cho chó con cỡ nhỏ ROYAL CANIN Mini Puppy",
    },
    {
      id: 3,
      imageUrl:
        "https://www.petmart.vn/wp-content/uploads/2019/04/pate-cho-cho-vi-thit-bo-iris-one-care-beef100g-300x300.jpg",
      price: 35000,
      title: "Pate cho chó vị thịt bò IRIS One Care Beef",
    },
    {
      id: 4,
      imageUrl:
        "https://www.petmart.vn/wp-content/uploads/2013/05/banh-thuong-cho-cho-vi-thit-bo-vegebrand-orgo-freshening-biscuit-bacon-beef-300x300.jpg",
      price: 25000,
      title:
        "Bánh thưởng cho chó vị thịt bò VEGEBRAND Orgo Freshening Biscuit Bacon Beef",
    },
    {
      id: 5,
      imageUrl:
        "https://www.petmart.vn/wp-content/uploads/2021/06/thuc-an-cho-cho-poodle-con-royal-canin-poodle-puppy1-300x300.jpg",
      price: 175000,
      title: "Thức ăn cho chó Poodle con ROYAL CANIN Poodle Puppy",
    },
    {
      id: 6,
      imageUrl:
        "https://www.petmart.vn/wp-content/uploads/2012/08/pate-cho-cho-nuoc-sot-vi-thit-bo-pedigree-pouch-beef-300x300.jpg",
      price: 25000,
      title: "Pate cho chó nước sốt vị thịt bò PEDIGREE Pouch Beef",
    },
    {
      id: 7,
      imageUrl:
        "https://www.petmart.vn/wp-content/uploads/2015/12/xuong-cho-cho-vi-thit-bo-le-vegebrand-orgo-nutrients-beef-300x300.jpg",
      price: 25000,
      title: "Xương cho chó vị thịt bò VEGEBRAND Orgo Nutrients Beef",
    },
    {
      id: 8,
      imageUrl:
        "https://www.petmart.vn/wp-content/uploads/2014/10/xuong-canxi-cho-cho-vegebrand-orgo-high-calcium-cheese-300x300.jpg",
      price: 50000,
      title: "Xương Canxi cho chó VEGEBRAND Orgo High Calcium Cheese",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="h-36"></div>
      <div className="w-10/12   mx-auto flex">
        <div className="w-1/4 ">
          <h1
            className="text-2xl text-center font-light py-2 "
            style={{ borderBottom: "1px solid #ccc" }}
          >
            Danh mục sản phẩm
          </h1>
          <div className="mt-2">
            <span
              className=" py-2 text-md font-medium cursor-pointer flex items-center"
              onClick={() => handleChange(1)}
            >
              Đồ dùng cho chó mèo
              <KeyboardArrowDown />
            </span>
            <div className={`flex space-x-3 mt-2 ${checked ? "" : "hidden"}`}>
              <Zoom in={checked}>
                <Paper elevation={4}>
                  <img
                    src="https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-food-icon-design-vector-png-image_1966513.jpg"
                    alt=""
                    height={60}
                    width={60}
                  />
                </Paper>
              </Zoom>
              <Zoom
                in={checked}
                style={{ transitionDelay: checked ? "500ms" : "0ms" }}
              >
                <Paper elevation={4}>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/014/317/331/original/dog-clothes-icon-cartoon-style-vector.jpg"
                    height={60}
                    width={60}
                    alt=""
                  />
                </Paper>
              </Zoom>
              <Zoom
                in={checked}
                style={{ transitionDelay: checked ? "1000ms" : "0ms" }}
              >
                <Paper elevation={4}>
                  <img
                    src="https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-hot-news-icon-cartoon-style-png-image_1861665.jpg"
                    height={60}
                    width={60}
                    alt=""
                  />
                </Paper>
              </Zoom>
              <Zoom
                in={checked}
                style={{ transitionDelay: checked ? "1500ms" : "0ms" }}
              >
                <Paper elevation={4}>
                  <img
                    src="https://www.shutterstock.com/image-vector/dog-house-icon-260nw-524271106.jpg"
                    height={60}
                    width={60}
                    alt=""
                  />
                </Paper>
              </Zoom>
            </div>
          </div>
          <div className="mt-2">
            <span
              className=" py-2 text-md font-medium cursor-pointer flex items-center"
              onClick={() => handleChange(2)}
            >
              Đồ dùng vệ sinh
              <KeyboardArrowDown />
            </span>
            <div className={`flex space-x-3 mt-2 ${checked2 ? "" : "hidden"}`}>
              <Zoom in={checked2}>
                <Paper elevation={4}>
                  <img
                    src="https://vn-live-01.slatic.net/p/f7ea308a177b86e0d17b1c42bd382a26.jpg"
                    alt=""
                    height={60}
                    width={60}
                  />
                </Paper>
              </Zoom>
              <Zoom
                in={checked2}
                style={{ transitionDelay: checked2 ? "500ms" : "0ms" }}
              >
                <Paper elevation={4}>
                  <img
                    src="https://bizweb.dktcdn.net/100/305/551/files/thiet-ke-khong-ten-35.png?v=1561872110809"
                    height={60}
                    width={60}
                    alt=""
                  />
                </Paper>
              </Zoom>
              <Zoom
                in={checked2}
                style={{ transitionDelay: checked2 ? "1000ms" : "0ms" }}
              >
                <Paper elevation={4}>
                  <img
                    src="https://www.phukienthucungdep.com/upload/images/D-028/day-xich-cho-lon.jpg"
                    height={60}
                    width={60}
                    alt=""
                  />
                </Paper>
              </Zoom>
              <Zoom
                in={checked2}
                style={{ transitionDelay: checked2 ? "1500ms" : "0ms" }}
              >
                <Paper elevation={4}>
                  <img
                    src="https://www.shutterstock.com/image-vector/dog-house-icon-260nw-524271106.jpg"
                    height={60}
                    width={60}
                    alt=""
                  />
                </Paper>
              </Zoom>
            </div>
          </div>
          <div className="mt-2">
            <h1
              className="text-2xl text-center font-light py-2 mt-2 "
              style={{ borderBottom: "1px solid #ccc" }}
            >
              Bài viết hữu ích
            </h1>
            {arrayNews.map((news, index) => (
              <div className="flex my-4" key={index}>
                <div className="h-10 w-10 mr-2 flex items-center justify-center text-white bg-[#333333]">
                  {news.id}
                </div>
                <p>{news.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="p-10 pt-0">
            <ReactPlayer
              controls
              width={"100%"}
              height={"500px"}
              url={
                "https://www.youtube.com/watch?v=5xFOXL0INQo&ab_channel=PetMart-C%E1%BB%ADaH%C3%A0ngTh%C3%BAC%C6%B0ng"
              }
            />
          </div>
          <div className=" p-10 flex flex-wrap">
            {arrayProducts.map((product) => (
              <div className="w-1/4  px-3 mb-5 cursor-pointer hover:scale-105 transition ease-linear">
                <div
                  className="rounded-md  "
                  style={{ border: "1px solid #ccc" }}
                >
                  <img src={product.imageUrl} alt="" />
                  <div>
                    <span className="text-[#33333] block min-h-[100px]">
                      {product.title}
                    </span>
                    <span className="block text-red-500 font-medium text-2xl py-3 text-center">
                      {product.price} đ
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
