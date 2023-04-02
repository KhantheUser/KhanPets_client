import React, { Fragment, useState } from "react";

import styled from "styled-components";
import { Delete, CloseOutlined } from "@material-ui/icons";
import Snackbar from "@material-ui/core/Snackbar";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";

import { useEffect } from "react";
import {
  deleteAllCart,
  deleteMyCart,
  getMyCarts,
} from "../../redux/reducers/cartSlice";
import { useMemo } from "react";
import Alert from "@material-ui/lab/Alert";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { publicRequest } from "../../util/apiCall";
import Collapse from "@material-ui/core/Collapse";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 30px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  display: none;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  @media (min-width: 896px) {
    display: block;
    flex: 1;
  }
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  overflow: hidden;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  padding: 10px;
  flex-direction: column;
  justify-content: space-between;
  display: none;
  @media (min-width: 500px) {
    display: flex;
  }
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  display: none;
  @media (min-width: 640px) {
    display: flex;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 500};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  display: none;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s linear;
  @media (min-width: 640px) {
    display: flex;
  }

  &:hover {
    opacity: 0.8;
  }
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: #d94949;
  color: white;
  font-weight: 600;
`;

function CartPage() {
  const { currentUser } = useSelector((state) => state.user);
  const [checked, setChecked] = useState([]);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const handleCheckout = async () => {
    try {
      const data = await publicRequest.post("/checkout", {
        user: {
          email: currentUser.email,
          name: currentUser.username,
          phone: currentUser.phone,
        },
        carts,
      });
      dispatch(deleteAllCart(currentUser._id));
      window.location.href = data.data.data.url;
    } catch (e) {
      console.log(e);
    }
  };
  const total = useMemo(() => {
    return carts?.reduce((total, current) => {
      return total + current.product?.price;
    }, 0);
  }, [carts]);

  useEffect(() => {
    dispatch(getMyCarts(userId));
  }, [userId]);
  const navigate = useNavigate();
  const handleDeleteCart = (id) => {
    dispatch(deleteMyCart({ id, userId }));
    handleClick();
    setTimeout(() => handleClose(), 2000);
  };
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSetChecked = (index) => {
    if (checked.includes(index)) {
      const filtered = checked.filter((item) => item !== index);
      setChecked(filtered);
    } else {
      setChecked((prev) => [...prev, index]);
    }
  };
  return (
    <Container>
      <Navbar />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This product has been deleted successfully
        </Alert>
      </Snackbar>
      <Wrapper>
        <div style={{ height: 100 }}></div>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton onClick={() => navigate("/products")}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts className="hidden sm:block">
            <TopText>Shopping Badge({carts?.length})</TopText>
            <TopText>Your Whislist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {carts?.map((cart, index) => (
              <Fragment key={index}>
                <Product
                  className="relative ssad"
                  onClick={() => handleSetChecked(index)}
                >
                  <span
                    className="absolute top-0 right-0 sm:hidden "
                    onClick={() => handleDeleteCart(cart._id)}
                  >
                    <CloseOutlined />
                  </span>
                  <ProductDetail className="relative">
                    <LazyLoadImage
                      src={cart.product?.img[0]}
                      style={{
                        borderRadius: "16px",
                        width: "200px",
                        height: "150px",
                      }}
                    />
                    <Details className="">
                      <div>
                        <b>ID :</b> {cart.product?._id}
                      </div>
                      <div>
                        <b>Name :</b> {cart.product?.name}
                      </div>
                      <div>
                        <b>Giống loại :</b> {cart.product?.generic}
                      </div>
                      <div>
                        <b>Tuổi :</b> {cart.product?.age}
                      </div>

                      <div>
                        <b>Giá/đơn vị :</b> {cart.product?.price}
                      </div>
                    </Details>
                    <div className="ssm:hidden absolute top-[40%] -right-[30%] font-poppins font-[300] ">
                      Chi tiết
                    </div>
                  </ProductDetail>

                  <PriceDetail>
                    <ProductAmountContainer>
                      <Button onClick={() => handleDeleteCart(cart._id)}>
                        Delete
                        <Delete />
                      </Button>
                    </ProductAmountContainer>
                    <ProductPrice>{cart.product?.price}</ProductPrice>
                  </PriceDetail>
                </Product>

                <div
                  className={checked.includes(index) ? "sm:hidden" : "hidden"}
                >
                  <div>
                    <b>ID :</b> {cart.product?._id}
                  </div>
                  <div>
                    <b>Name :</b> {cart.product?.name}
                  </div>
                  <div>
                    <b>Giống loại :</b> {cart.product?.generic}
                  </div>
                  <div>
                    <b>Tuổi :</b> {cart.product?.age}
                  </div>

                  <div>
                    <b>Giá/đơn vị :</b> {cart.product?.price}
                  </div>
                </div>
              </Fragment>
            ))}
            <button
              className="w-full mt-2 xmd:hidden rounded-md text-white font-medium cursor-pointer text-2xl py-4 hover:opacity-80 transition ease-linear"
              style={{
                backgroundColor: `${total === 0 ? "#ccc" : "#fda401"}`,
                cursor: `${total === 0 ? "not-allowed" : "pointer"}`,
                textAlign: "center",
              }}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </Info>
          <Summary>
            <SummaryTitle>SUMMARY TITLE</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {total}</SummaryItemPrice>
            </SummaryItem>
            <button
              className="w-full rounded-md text-white font-medium cursor-pointer text-2xl py-4 hover:opacity-80 transition ease-linear"
              style={{
                backgroundColor: `${total === 0 ? "#ccc" : "#fda401"}`,
                cursor: `${total === 0 ? "not-allowed" : "pointer"}`,
                textAlign: "center",
              }}
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default CartPage;
