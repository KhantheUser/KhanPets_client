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

function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState({ img: ["0"] });
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  useEffect(() => {
    const getProductDetail = async () => {
      const res = await publicRequest.get(`animal/${productId}`);
      console.log(res.data.data.data);
      setProductDetail(res.data.data.data);
    };
    getProductDetail();
  }, [productId]);
  return (
    <div className="productDetail">
      <Navbar />
      <div style={{ height: "100px" }}></div>
      <div className="productDetialWrapper">
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
        <div className="info">
          <div className="infoWrapper mt-6">
            <h1 className="title text-2xl">{productDetail.name}</h1>
            <p className="desc mt-3">Mô tả : {productDetail.desc}</p>
            <div className="infoBuy">
              <div className="infoBuyItem">
                <p className="infoTitle">Giống loài : </p>
                <b>{productDetail.generic}</b>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Tên thú cưng : </p>
                <b>{productDetail.name}</b>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Tuổi : </p>
                <b>3</b>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Giới tính : </p>
                <b>{productDetail.sex}</b>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Số lượng : </p>
                <b>{productDetail.quantity}</b>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Tên người bán : </p>
                <b>{productDetail.user?.username}</b>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Số điện thoại : </p>
                <b>{productDetail.user?.phone}</b>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Địa chỉ : </p>
                <b>{productDetail.address}</b>
              </div>
              <div className="infoBuyItem">
                <p
                  style={{ fontSize: 24, fontWeight: 500 }}
                  className="infoTitle"
                >
                  Giá bán :{" "}
                </p>
                <b style={{ fontSize: 24, color: "orangered" }}>
                  {productDetail?.price} đ
                </b>
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
            >
              Thêm thú cưng
            </Button>
          </div>
          <div className="map"></div>
        </div>
      </div>
      <Comments dataHref={productDetail._id} />
      <Footer />
    </div>
  );
}

export default ProductDetail;
