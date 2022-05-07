import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, updateTotalPrice } from "../redux/action";
import {
  RightInnerBox,
  GiftCard,
  PriceBox,
  TotalBox,
  ProdSummryBox,
  RightBox,
  ProductDiv,
  ProdImgData,
  ProdImg,
  ProdDetails,
  ProdPrice,
} from "./StyledComponents/CartItemSummryStyled";

const CartItemSummry = () => {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartData, "cart");

  // let totalPrice = 0;
  // data.map((prod) => {
  //   totalPrice = totalPrice + prod.quant * prod.price;
  // });
  const [promoCode, setPromoCode] = useState("");

  const { totalPrice, tax, promoCodeStatus } = useSelector(
    (state) => state.shipping
  );

  const dispatch = useDispatch();
  const handleClick = () => {
    if (promoCodeStatus && promoCode == "Masai30") {
      let discountPrice = totalPrice - totalPrice * 0.3;
      dispatch(updateTotalPrice(discountPrice));
      setPromoCode("");
    } else if (promoCode !== "Masai30") {
      alert("Enter valid code");
      setPromoCode("");
    } else {
      alert("Already used");
      setPromoCode("");
    }
  };
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <RightBox>
      <RightInnerBox>
        <ProdSummryBox>
          {cartData.map((prod) => {
            return (
              <ProductDiv>
                <ProdImgData>
                  <ProdImg>
                    <img src={prod.img} alt="" />
                  </ProdImg>
                  <ProdDetails>
                    <p style={{ fontSize: "14px" }}>{prod.desc}</p>
                    <p style={{ fontSize: "12px" }}>Quantity :{prod.qty}</p>
                  </ProdDetails>
                </ProdImgData>
                <ProdPrice>${prod.price * prod.qty}</ProdPrice>
              </ProductDiv>
            );
          })}
        </ProdSummryBox>
        <GiftCard>
          <input
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            type="text"
            placeholder="Gift card or discount code"
          />
          <Button onClick={handleClick} size="large">
            Apply
          </Button>
        </GiftCard>
        <PriceBox>
          <div>
            <p>Subtotal</p>
            <p>
              $<span>{totalPrice}</span>
            </p>
          </div>
          <div>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div>
            <p>Duties & Taxes</p>
            <p>
              $<span>{tax}</span>
            </p>
          </div>
        </PriceBox>
        <TotalBox>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>Total</p>
          <div>
            <p style={{ fontSize: "12px", color: "#717171" }}>USD </p>
            <p style={{ fontSize: "24px", color: "#323232" }}>
              $<span>{totalPrice + tax}</span>
            </p>
          </div>
        </TotalBox>
      </RightInnerBox>
    </RightBox>
  );
};

export default CartItemSummry;
