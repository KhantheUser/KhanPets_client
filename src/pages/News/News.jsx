import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "react-slick";
import axios from "axios";
import dayjs from "dayjs";
import useResize from "../../util/useSize";
const News = () => {
  const size = useResize();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      try {
        const newsData = await axios.get(
          "https://newsapi.org/v2/everything?q=dog&apiKey=7db22516815c45f782feeac565314be7"
        );
        console.log(newsData.data.articles);
        setNews(newsData.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    getNews();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: size > 896 ? 4 : 2,
    slidesToScroll: size > 896 ? 4 : 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="news">
      <Navbar />
      <div className="h-32"></div>
      <div className="w-9/12 mx-auto ">
        <h2 className="text-xl font-medium text-[#fda401] mb-2">Latest News</h2>
        <Slider {...settings}>
          {news?.slice(0, 16).map((newsItem, index) => (
            <div className="cursor-pointer" key={index}>
              <div className="px-2 h-32 ">
                <img
                  src={
                    newsItem?.urlToImage ||
                    "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-cap-2-3.jpg"
                  }
                  alt=""
                  className=" w-full h-full"
                />
                <div className="font-poppins font-medium my-2">
                  {newsItem?.title.length > 50
                    ? newsItem?.title.slice(0, 50) + "..."
                    : newsItem?.title}
                </div>
                <div className="text-gray-400">
                  <span className="font-medium">
                    {newsItem?.author?.slice(0, 25) || "Khan the"}
                  </span>
                  <span className="block text-sm">
                    {dayjs(newsItem.publishedAt).format("DD/MM/YYYY")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex w-10/12 mx-auto justify-evenly mt-10">
        <div className="w-[30%] xmd:block hidden ">
          <h2 className="font-medium text-xl ">Danh mục bài viết</h2>
          <div>
            {news?.slice(16, 24).map((newsItem, index) => (
              <div
                className="my-2"
                style={{ boxShadow: "2px 2px 2px rgba(0,0,0,0.3)" }}
              >
                <div className="flex p-2">
                  <img
                    className="rounded-md"
                    src={
                      newsItem.urlToImage ||
                      "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-cap-2-3.jpg"
                    }
                    height={50}
                    width={50}
                    alt=""
                  />
                  <div>
                    {" "}
                    {newsItem?.title.length > 70
                      ? newsItem?.title.slice(0, 70) + "..."
                      : newsItem?.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[100%] xmd:w-[60%]">
          {news?.slice(24, 29).map((newsItem, index) => (
            <div className="my-3 border-2">
              <div className="p-2">
                <div className="mb-3">
                  <h2 className="text-2xl font-medium">{newsItem.title}</h2>
                  <p className="text-gray-400">
                    <span>
                      {newsItem.author} - {"  "}
                      {dayjs(newsItem.publishedAt).format("DD/MM/YYYY")}
                    </span>
                  </p>
                </div>
                <img
                  src={
                    newsItem.urlToImage ||
                    "https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-cap-2-3.jpg"
                  }
                  alt=""
                />
                <div>
                  <p>{newsItem.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
