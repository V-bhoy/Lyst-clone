import React, { useState } from "react";
import {
  FooterContainer,
  InnerContainer,
  LeftContainer,
  Trustpilot,
  StarRatings,
  HalfStarBox,
  ScoreReviewsBox,
  SocialMediaHandler,
  StoreContainer,
  BottomText,
  MiddleContainer,
  RightContainer,
  PopupContainer,
  PopupChild,
  InnerChild,
  QrBox,
  Mobile,
} from "./FooterStyled";
import StarIcon from "@mui/icons-material/Star";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
const Footer = () => {
  const [popup, setPopup] = useState(false);
  return (
    <FooterContainer>
      <InnerContainer>
        <LeftContainer>
          <Trustpilot>
            <StarIcon />
            <h2>Trustpilot</h2>
          </Trustpilot>
          <StarRatings>
            <div>
              <StarIcon />
            </div>
            <div>
              <StarIcon />
            </div>
            <div>
              <StarIcon />
            </div>
            <div>
              <StarIcon />
            </div>
            <HalfStarBox>
              <StarIcon />
            </HalfStarBox>
          </StarRatings>
          <ScoreReviewsBox>
            <p>
              TrustScore <b>4.5</b>
            </p>
            <p>
              <b>2668 </b> reviews
            </p>
          </ScoreReviewsBox>

          <SocialMediaHandler>
            <FacebookIcon />
            <InstagramIcon />
          </SocialMediaHandler>
          <StoreContainer>
            <div
              onClick={() => {
                setPopup(true);
              }}
              style={{ width: "130px" }}
            >
              <img
                style={{ width: "100%" }}
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                alt="AppleStore"
              />
            </div>
            <div
              onClick={() => {
                setPopup(true);
              }}
              style={{ width: "175px" }}
            >
              <img
                style={{ width: "100%" }}
                src="https://www.logo.wine/a/logo/Google_Play/Google_Play-Badge-Logo.wine.svg"
                alt="PlayStore"
              />
            </div>
          </StoreContainer>
          <BottomText>
            <p>
              <a href="/">
                Learn about the Lyst app for iPhone, iPad and Android.
              </a>
            </p>
            <p>© 2022 Lyst</p>
          </BottomText>
        </LeftContainer>
        <MiddleContainer>
          <h2>INTERNATIONAL</h2>
          <ul>
            <li>
              <a href="/">Lyst - AU</a>
            </li>
            <li>
              <a href=""></a>Lyst - CA
            </li>
            <li>
              <a href=""></a>Lyst - UK
            </li>
            <li>
              <a href="">Lyst - Österreich</a>
            </li>
            <li>
              <a href="">Lyst - Schweiz</a>
            </li>
            <li>
              <a href="">Lyst - Deutschland</a>
            </li>
            <li>
              <a href="">Lyst - España</a>
            </li>
            <li>
              <a href="">Lyst - France</a>
            </li>
            <li>
              <a href="">Lyst - Italia</a>
            </li>
            <li>
              <a href="">Lyst - 日本</a>
            </li>
            <li>
              <a href="">Lyst - België</a>
            </li>
            <li>
              <a href="">Lyst - Nederland</a>
            </li>
          </ul>
        </MiddleContainer>
        <RightContainer>
          <h2>HELP AND INFO</h2>
          <ul>
            <li>
              <a href="">Help center</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Shipping policy</a>
            </li>
            <li>
              <a href="">Returns policy</a>
            </li>
            <li>
              <a href="">Payments</a>
            </li>
            <li>
              <a href="">Refund policy</a>
            </li>
            <li>
              <a href="">Developers</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Terms & conditions</a>
            </li>
            <li>
              <a href="">Privacy & cookie policy</a>
            </li>
            <li>
              <a href="">Intellectual property</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Become a partner</a>
            </li>
            <li>
              <a href="">Lyst Insights</a>
            </li>
            <li>
              <a href="">Lyst News</a>
            </li>
          </ul>
        </RightContainer>
      </InnerContainer>
      {popup && (
        <PopupContainer>
          <PopupChild>
            <InnerChild>
              <QrBox>
                <button
                  onClick={() => {
                    setPopup(false);
                  }}
                >
                  <CloseIcon />
                </button>
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/241/241521.png"
                    alt="qrCode"
                  />
                </div>
              </QrBox>
              <h1>Scan the code on your phone</h1>
              <h3>
                Open the camera on your phone to scan and download the Lyst app
                for free
              </h3>
              <p>Available on iOS and Android</p>
              <Mobile
                src="https://static.lystit.com/static/n/web/react/components/qrcode-overlay/images/get-app-phone.ba25ca91295f8c2fa372763d098933cd.png"
                alt=""
              />
            </InnerChild>
          </PopupChild>
        </PopupContainer>
      )}
    </FooterContainer>
  );
};

export default Footer;
