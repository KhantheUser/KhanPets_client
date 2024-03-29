import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Footer from "../../components/Footer/Footer";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar/Navbar";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../../util/apiCall";
import { useNavigate } from "react-router-dom";
import { createACart } from "../../redux/reducers/cartSlice";
import Comments from "../../components/SocialPlugin/Comments";
import useResize from "../../util/useSize";
import Slider from "react-slick";
function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const size = useResize();
  const [productDetail, setProductDetail] = useState({ img: ["0"] });
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const currentUrl = productDetail._id;
  const settings = {
    dots: true,
    infinite: true,

    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: false,

    autoplaySpeed: 3000,
  };
  useEffect(() => {
    const getProductDetail = async () => {
      const res = await publicRequest.get(`animal/${productId}`);

      setProductDetail(res.data.data.data);
    };
    getProductDetail();
  }, [productId]);
  return (
    <div className="productDetail">
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <div className="productDetialWrapper">
        {size > 1024 ? (
          <div className="image">
            <div className="left">
              <LazyLoadImage
                effect="blur"
                src={productDetail.img[0]}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="right">
              {productDetail.img?.map((img, index) => (
                <div key={index} className="imgWrapper">
                  <LazyLoadImage
                    effect="blur"
                    src={img}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {productDetail.img?.map((img, index) => (
              <div key={index} className="imgWrapper">
                <LazyLoadImage
                  effect="blur"
                  src={img}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            ))}
          </Slider>
        )}
        <div className="info">
          <div className="infoWrapper mt-6">
            <h1 className="title text-3xl font-medium">{productDetail.name}</h1>
            <p className="desc mt-3 tracking-widest text-[#4a4a4a]">
              Mô tả : {productDetail.desc}
            </p>
            <div className="infoBuy">
              <div className="infoBuyItem">
                <p className="infoTitle">Giống loài : </p>
                <div>{productDetail.generic}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Tên thú cưng : </p>
                <div>{productDetail.name}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Tuổi : </p>
                <div>{productDetail?.age}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Giới tính : </p>
                <div>{productDetail.sex}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Số lượng : </p>
                <div>{productDetail.quantity}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Tên người bán : </p>
                <div>{productDetail.user?.username}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Số điện thoại : </p>
                <div>{productDetail.user?.phone}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Địa chỉ : </p>
                <div>{productDetail.address}</div>
              </div>
              <div className="infoBuyItem">
                <p
                  style={{ fontSize: 24, fontWeight: 500 }}
                  className="infoTitle"
                >
                  Giá bán :{" "}
                </p>
                <div style={{ fontSize: 24, color: "orangered" }}>
                  {productDetail?.price} đ
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                if (!currentUser) {
                  navigate("/login");
                } else {
                  const index = carts.findIndex(
                    (cart) => cart.product._id === productDetail._id
                  );

                  if (index !== -1) {
                    alert("San pham da co trong gio hang");
                    return;
                  }
                  dispatch(
                    createACart({
                      productId: productDetail._id,
                      userId: currentUser._id,
                    })
                  );
                  navigate(`/cart/me/${currentUser._id}`);
                }
                // navigate("/cart/me/" + currentUser._id);
              }}
              variant="contained"
              style={{
                background: "#FFA500",
                padding: "10px 6px",
                width: 250,
                fontSize: 24,
                color: "white",
              }}
              className="hover:bg-[#ec9e0d] "
            >
              Thêm thú cưng
            </Button>
          </div>
          {/* <div className="map"></div> */}
        </div>
        <div className="mt-10">
          <Comments dataHref={currentUrl} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
