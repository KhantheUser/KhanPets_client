import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import "../../customCompoent/Button";
import { Button } from "../../customCompoent/Button";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

function Carousel() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["for all pets"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    arrow: true,
    prevArrow: <ArrowBackIos fontSize="large" />,
    nextArrow: <ArrowForwardIos fontSize="large" />,

    autoplaySpeed: 3000,
  };
  const images = [
    {
      id: 2,
      image:
        "https://thuthuatnhanh.com/wp-content/uploads/2020/01/hinh-nen-cho-chan-ngan-corgi-dep-dang-tao-dang-chup-anh.jpeg",
    },
    {
      id: 3,
      image:
        "https://i0.wp.com/drkhoe.vn/wp-content/uploads/2020/05/hinh-anh-3-con-cho-9.jpg",
    },
    {
      id: 4,
      image:
        "https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-anh-1.jpg",
    },
  ];
  return (
    <div className="carousel hidden sm:block ">
      <Slider {...settings}>
        <div className="imageContainer">
          <div
            className="image"
            style={{
              background: `url(https://s3.cloud.cmctelecom.vn/tinhte2/2020/03/4936916_cute-cats-wallpapers-11____by____twalls.jpg)`,
            }}
          >
            <div
              className="image_intro"
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "40%" }}>
                <span
                  style={{
                    display: "block",
                    color: "white",
                    fontSize: "60px",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  We care <br /> {text}
                </span>
                <p
                  style={{ textAlign: "center", color: "white", marginTop: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis odio earum recusandae odit laboriosam iste
                  quibusdam cupiditate in placeat illo.
                </p>

                <Button content="Get Info" styleCss={{ fontSize: "20px" }} />
              </div>
            </div>
          </div>
        </div>
        {images.map((image, index) => {
          return (
            <div key={index} className="imageContainer">
              <div
                className="image"
                style={{ background: `url(${image.image})` }}
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
