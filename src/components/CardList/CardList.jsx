import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "../../util/apiCall";
import CardItem from "../Card/Card";
import "../../customCompoent/Button";
import "./CardList.scss";
import { Button } from "../../customCompoent/Button";
import { useNavigate } from "react-router-dom";
function CardList() {
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getAnimals = async () => {
      try {
        const res = await publicRequest.get("/animal");
        setProduct(res.data.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAnimals();
  }, []);
  return (
    <div className="cardList">
      <h1 className="title text-[42px] font-[500] text-[#363c45]">
        Thú cưng được nhiều lượt xem nhất
      </h1>
      <p className="sub-title text-[16px] text-[#4A4A4A] tracking-widest">
        Được nhiều khách hàng tham khảo , hỏi mua
      </p>
      <div className="wrapper">
        {products.slice(0, 6).map((product, index) => (
          <div
            key={index}
            className="wrapperItem wow animate__animated animate__slideInDown"
          >
            <CardItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
