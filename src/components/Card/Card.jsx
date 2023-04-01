import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
import "./Card.scss";
import { Star } from "@material-ui/icons";
export default function CardItem({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="cardItem hover:-translate-y-2 transition ease-linear hover:shadow-2xl mt-4"
      onClick={() => navigate(`/product-detail/${product._id}`)}
    >
      <button
        onClick={() => navigate(`/product-detail/${product._id}`)}
        className="detail text-white rounded-lg text-lg font-medium hover:bg-white hover:text-[#f1a414]"
      >
        Chi tiết
      </button>
      <Card onClick={() => navigate(`/product-detail/${product._id}`)}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height={240}
            image={product.img[0]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              title={product.name}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.name.length > 10
                ? product.name.slice(0, 10) + "..."
                : product.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ minHeight: "100px", wordBreak: "break-word" }}
            >
              {product.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className=" justify-start w-full p-3">
            <div>
              <Star className="text-[#f1a414]" />
              <Star className="text-[#f1a414]" />
              <Star className="text-[#f1a414]" />
              <Star className="text-[#f1a414]" />
              <Star className="text-[#f1a414]" />
            </div>
            <div className="block text-2xl  text-[#f1a414] font-poppins">
              {product.price} <span className="underline text-[20px]">đ</span>
              <span className="text-gray-400 inline ml-2 line-through text-[16px]">
                {product.price - (product.price * 1) / 10}
              </span>
            </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
