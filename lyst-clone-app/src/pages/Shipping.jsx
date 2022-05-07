import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CartItemSummry from "./CartItemSummry";
import { Link } from "react-router-dom";

import {
  MainContainer,
  LeftBox,
  LeftInnerBox,
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
  MobileView,
  DekstopView,
} from "./StyledComponents/ShippingStyled";
const Shipping = () => {
  return (
    <MainContainer>
      <LeftBox>
        <LeftInnerBox>
          <MobileView>
            <CartItemSummry />
          </MobileView>
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
              <div style={{ fontSize: "14px", color: "#333333" }}>Address</div>
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
            <Link to="payment">
              <PaymentButton>Continue to payment</PaymentButton>
            </Link>
          </PaymentDiv>
          <PolicyDiv>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms of services</p>
          </PolicyDiv>
        </LeftInnerBox>
      </LeftBox>
      <DekstopView>
        <CartItemSummry />
      </DekstopView>
    </MainContainer>
  );
};

export default Shipping;
