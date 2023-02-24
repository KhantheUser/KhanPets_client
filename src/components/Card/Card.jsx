import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useNavigate } from "react-router-dom";
import "./Card.scss";
import { useDispatch, useSelector } from "react-redux";
import { createACart } from "../../redux/reducers/cartSlice";
const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    // width: "100%",
  },
});

export default function CardItem({ product }) {
  const { currentUser } = useSelector((state) => state.user);

  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className="cardItem hover:-translate-y-2 transition ease-linear hover:shadow-2xl mt-4">
      <button
        onClick={() => navigate(`/product-detail/${product._id}`)}
        className="detail text-white rounded-lg text-lg font-medium hover:bg-white hover:text-[#f1a414]"
      >
        Chi tiết
      </button>
      <Card
        className={classes.root}
        onClick={() => navigate(`/product-detail/${product._id}`)}
      >
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
              style={{ minHeight: "90px", wordBreak: "break-word" }}
            >
              {product.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className="flex justify-center w-full py-3">
            <span className="block text-2xl  text-[#f1a414]">
              {product.price} đ
            </span>
          </div>
          {/* <Button
            size="small"
            color="primary"
            onClick={() => {
              const index = carts.findIndex(
                (cart) => cart.product._id === product._id
              );

              if (index !== -1) {
                alert("San pham da co trong gio hang");
                return;
              }
              dispatch(
                createACart({
                  productId: product._id,
                  userId: currentUser._id,
                })
              );
              navigate(`/cart/me/${currentUser._id}`);
            }}
          >
            Buy
          </Button> */}
          {/* <Button
            size="small"
            color="primary"
            onClick={() => navigate(`/product-detail/${product._id}`)}
          >
            Details
          </Button> */}
        </CardActions>
      </Card>
    </div>
  );
}
