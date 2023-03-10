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
  const currentUrl = productDetail._id;

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
            <h1 className="title text-3xl font-medium">{productDetail.name}</h1>
            <p className="desc mt-3 tracking-widest text-[#4a4a4a]">
              M?? t??? : {productDetail.desc}
            </p>
            <div className="infoBuy">
              <div className="infoBuyItem">
                <p className="infoTitle">Gi???ng lo??i : </p>
                <div>{productDetail.generic}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">T??n th?? c??ng : </p>
                <div>{productDetail.name}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Tu???i : </p>
                <div>{productDetail?.age}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">Gi???i t??nh : </p>
                <div>{productDetail.sex}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">S??? l?????ng : </p>
                <div>{productDetail.quantity}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">T??n ng?????i b??n : </p>
                <div>{productDetail.user?.username}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">S??? ??i???n tho???i : </p>
                <div>{productDetail.user?.phone}</div>
              </div>
              <div className="infoBuyItem">
                <p className="infoTitle">?????a ch??? : </p>
                <div>{productDetail.address}</div>
              </div>
              <div className="infoBuyItem">
                <p
                  style={{ fontSize: 24, fontWeight: 500 }}
                  className="infoTitle"
                >
                  Gi?? b??n :{" "}
                </p>
                <div style={{ fontSize: 24, color: "orangered" }}>
                  {productDetail?.price} ??
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
              Th??m th?? c??ng
            </Button>
          </div>
          <div className="map"></div>
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
