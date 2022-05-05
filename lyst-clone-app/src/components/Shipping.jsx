import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import {
  MainContainer,
  LeftBox,
  LeftInnerBox,
  ImageBox,
  PageTracker,
  Details,
  Contact,
  ShipTo,
  IPES,
  Radio,
  PaymentDiv,
  ReturnToInfo,
  PaymentButton,
  PolicyDiv,
} from "./ShippingStyled";
import { Link } from "react-router-dom";
import CartItemSummry from "./CartItemSummry";
const Shipping = () => {
  return (
    <MainContainer>
      <LeftBox>
        <LeftInnerBox>
          <ImageBox>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1515.903 476.323"
            >
              <path d="M164.033 11.984H0v454.25h336.268V311.658H164.033V11.984zm403.756.002l-67.975 126.463-67.343-126.463H279.634l136.904 282.01v172.235h163.401V292.738L720.631 11.986H567.789zm496.761 203.78c-15.137-10.51-31.965-17.694-50.47-23.59a511.081 511.081 0 00-56.778-14.507q-41.641-7.577-64.356-13.567c-15.142-3.992-25.23-9.476-26.776-20.89-.615-4.519.026-15.222 6.364-21.377 8.417-8.178 19.364-10.753 32.399-11.122 21.447-.605 28.416 3.039 35.785 8.716 7.352 5.682 12.105 17.45 12.105 30.44v1.262h154v-1.894c-2.948-52.573-21.452-87.193-55.516-112.016Q1000.195.002 909.984 0 813.46 0 761.721 41.009q-51.738 41.015-51.733 111.037 0 35.96 12.617 60.25a108.707 108.707 0 0034.07 39.428 190.67 190.67 0 0049.213 23.977 476.516 476.516 0 0056.147 14.512q42.893 7.562 66.875 14.512c15.978 4.628 28.044 12.408 28.044 23.34 0 10.36-4.609 17.58-9.58 21.711-5.08 4.23-16.788 8.51-29.823 8.51-15.138 0-27.621-4.066-35.401-10.166-7.787-6.09-15.149-18.086-15.98-29.869l-.202-3.783h-162.29v1.263c1.263 35.332 8.302 61.228 21.133 85.832q19.24 36.906 63.412 55.84 22.707 9.455 52.99 14.193 30.29 4.728 68.77 4.728 103.46 0 153.309-41.318 49.828-41.32 49.839-115.77 0-37.226-13.25-62.461a115.457 115.457 0 00-35.331-41.01zm75.339-203.781V151.17h109.779v315.06h157.724V151.17h108.511V11.985h-376.014z"></path>
            </svg>
          </ImageBox>
          <PageTracker>
            <div>
              Cart
              <span>
                <ChevronRightIcon />
              </span>
            </div>
            <div>
              Information
              <span>
                <ChevronRightIcon />
              </span>
            </div>
            <div>
              Shipping
              <span>
                <ChevronRightIcon />
              </span>
            </div>
            <div>
              Payment
              <span>
                <ChevronRightIcon />
              </span>
            </div>
          </PageTracker>
          <Details>
            <Contact>
              <div style={{ fontSize: "14px", color: "#737373" }}>Contact</div>
              <div style={{ fontSize: "14px", color: "#333333" }}>Email</div>
              <div style={{ fontSize: "12px", color: "#333333" }}>Change</div>
            </Contact>
            <ShipTo>
              <div
                style={{
                  width: "90px",
                  fontSize: "14px",
                  color: "#737373",
                  maxWidth: "100px",
                  paddingRight: "16px",
                }}
              >
                Ship to
              </div>
              <div style={{ fontSize: "14px", color: "#333333" }}>
                Aavkar society nr megha banglow Abu highway palanpur, ahoura AUK
                7843, New Zealand
              </div>
              <div style={{ fontSize: "12px", color: "#333333" }}>Change</div>
            </ShipTo>
          </Details>
          <div
            style={{
              color: "#333",
              fontSize: "15px",
              fontWeight: "bold",
              paddingTop: "42px",
            }}
          >
            Shipping method
          </div>
          <IPES>
            <div>
              <div>
                <Radio>
                  <div></div>
                </Radio>
                <p>International Priority Express Shipping</p>
              </div>
              <div
                style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
              >
                Free
              </div>
            </div>
          </IPES>
          <PaymentDiv>
            <ReturnToInfo>
              {/* <Link to=""> */}
              <span>
                <KeyboardArrowLeftIcon />
              </span>
              <span>Return to information</span>
              {/* </Link> */}
            </ReturnToInfo>
            <PaymentButton>Continue to payment</PaymentButton>
          </PaymentDiv>
          <PolicyDiv>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of services</p>
          </PolicyDiv>
        </LeftInnerBox>
      </LeftBox>
      <CartItemSummry />
    </MainContainer>
  );
};

export default Shipping;
