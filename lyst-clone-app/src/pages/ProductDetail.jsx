import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  AddToCartBtn,
  ProdOverlayDiv,
} from "./StyledComponents/Products.styled";

const ProductDetail = ({ setItemOverlay }) => {
  const data = JSON.parse(localStorage.getItem("Details"));
  const { img, title, desc, price, category, strikedOffPrice } = data;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let alreadyPresent = false;
    cart.forEach((item, index) => {
      if (item.desc === data.desc) {
        alreadyPresent = true;
        cart[index].qty++;
      }
    });
    if (alreadyPresent) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      data.qty = 1;
      cart.push(data);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  return (
    <>
      <ProdOverlayDiv>
        <div className="flex flex-col items-center  md:flex-row lg:flex-row justify-around bg-white relative w-[22rem] lg:w-[60rem] md:w-[46rem] h-[fit-content] px-14 py-14 overflow-y-auto">
          <CancelIcon
            className="absolute right-6 top-8 cursor-pointer"
            style={{ fontSize: "2rem" }}
            onClick={() => {
              setItemOverlay(false);
            }}
          />
          <img
            className="lg:w-[20rem] lg:h-[26rem] md:w-[16rem] md:h-[20rem] w-[10rem] h-[10rem]"
            src={img}
            alt={title}
          />
          <div className=" w-[full] md:w-[26rem] lg:w-[26rem]">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="text-[16px] text-gray-600">{desc}</p>
            <br />
            <div className="flex items-center mb-1">
              <p className="text-[#f9302d] font-extrabold text-2xl">${price}</p>
              <p className="pl-2 line-through text-[19px] text-gray-500 self-end">
                ${strikedOffPrice}
              </p>
            </div>
            <span className="text-sm text-gray-500">From</span>
            <span className="text-[16px] pl-2">{category}</span>
            <div
              className="w-full bg-black text-center my-4 cursor-pointer"
              onClick={addToCart}
            >
              <AddToCartBtn>Add to cart</AddToCartBtn>
            </div>
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Product Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  99% Cotton, 1% Elastane. Made in Italy. {desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </ProdOverlayDiv>
    </>
  );
};

export default ProductDetail;
