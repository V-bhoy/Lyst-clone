import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
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
} from "./CartItemSummryStyled";

const CartItemSummry = () => {
  let data = [
    {
      image:
        "https://cdna.lystit.com/200/250/tr/photos/tessuti/0dce67c1/fred-perry-Navy-Corduroy-Tennis-Bomber-Jacket-Blue.jpeg",
      title: "Shirt",
      quant: 2,
      price: 2000,
    },
    {
      image:
        "https://cdna.lystit.com/200/250/tr/photos/tessuti/0dce67c1/fred-perry-Navy-Corduroy-Tennis-Bomber-Jacket-Blue.jpeg",
      title: "Shirt",
      quant: 2,
      price: 2000,
    },
    {
      image:
        "https://cdna.lystit.com/200/250/tr/photos/tessuti/0dce67c1/fred-perry-Navy-Corduroy-Tennis-Bomber-Jacket-Blue.jpeg",
      title: "Shirt",
      quant: 2,
      price: 2000,
    },
  ];
  let totalPrice = 0;
  {
    data.map((prod) => {
      totalPrice = totalPrice + prod.quant * prod.price;
    });
  }
  const [promoCode, setPromoCode] = useState("");
  const [totalCost, setTotalCost] = useState(totalPrice);
  const [taxe, setTaxe] = useState(totalCost * 0.12);
  const handleChange = (e) => {
    setPromoCode(e.target.value);
  };
  // const [discount,setDiscount] = useState(0)
  const handleClick = () => {
    if (promoCode == "Masai30") {
      setTotalCost(totalCost - totalCost * 0.3);
    }
  };
  useEffect(() => {
    setTaxe(totalCost * 0.12);
  }, [totalCost]);
  return (
    <RightBox>
      <RightInnerBox>
        <ProdSummryBox>
          {data.map((prod) => {
            return (
              <ProductDiv>
                <ProdImgData>
                  <ProdImg>
                    <img src={prod.image} alt="" />
                  </ProdImg>
                  <ProdDetails>
                    <p>Product Title</p>
                    <p>Quantity :{prod.quant}</p>
                  </ProdDetails>
                </ProdImgData>
                <ProdPrice>$ {prod.price * prod.quant}</ProdPrice>
              </ProductDiv>
            );
          })}
        </ProdSummryBox>
        <GiftCard>
          <input
            onChange={handleChange}
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
              $<span>{totalCost}</span>
            </p>
          </div>
          <div>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div>
            <p>Duties & Taxes</p>
            <p>
              $<span>{taxe}</span>
            </p>
          </div>
        </PriceBox>
        <TotalBox>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>Total</p>
          <div>
            <p style={{ fontSize: "12px", color: "#717171" }}>USD </p>
            <p style={{ fontSize: "24px", color: "#323232" }}>
              $<span>total</span>
            </p>
          </div>
        </TotalBox>
      </RightInnerBox>
    </RightBox>
  );
};

export default CartItemSummry;
