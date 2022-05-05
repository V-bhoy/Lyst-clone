import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #f5f4f2;
  border-top: 1px solid black;
`;
export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1020px;
  margin: 0 auto;
  padding: 50px 0px;
  & ul {
    list-style: none;
  }
  & a {
    color: black;
  }
  @media (max-width: 992px) {
    display: block;
  }
`;

export const LeftContainer = styled.div`
  max-width: 35%;
  @media (max-width: 992px) {
    max-width: 100%;
    padding: 10px;
  }
`;
export const Trustpilot = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;

  & svg {
    color: #00b67a;
    font-size: 30px;
  }
  & h2 {
    font-weight: bold;
    font-size: 18px;
  }
`;

export const StarRatings = styled.div`
  display: flex;
  margin-bottom: 8px;
  & div {
    width: 40px;
    height: 40px;
    margin-right: 5px;
    text-align: center;
    background-color: #00b67a;
    & svg {
      color: white;
      font-size: 30px;
      margin-top: 5px;
    }
  }
`;
export const HalfStarBox = styled.div`
  background: linear-gradient(
    to right,
    #00b67a 0%,
    #00b67a 50%,
    #dcdce6 50%,
    #dcdce6 100%
  );
`;
export const RatingScoreBox = styled.div`
  & p {
    font-size: 14px;
  }
`;
export const ScoreReviewsBox = styled.div`
  & p {
    font-size: 15px;
  }
`;
export const SocialMediaHandler = styled.div`
  margin: 10px 0;
  & svg {
    font-size: 30px;
    margin-right: 10px;
  }
`;
export const StoreContainer = styled.div`
  display: flex;
  height: 50px;
  margin-bottom: 20px;
  align-items: center;
`;

export const BottomText = styled.div`
  & p {
    font-size: 14px;
    margin-bottom: 20px;
    & a:hover {
      text-decoration: underline;
    }
  }
`;

export const MiddleContainer = styled.div`
  width: 25%;
  padding-left: 100px;
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
      border-top: 1px solid black;
    }
    & svg {
      display: none;
      @media (max-width: 992px) {
        display: block;
      }
    }
  }
  & h2 {
    font-size: 22px;
    margin: 5px 0;
    font-weight: normal;
  }
  & li {
    font-size: 15px;
    margin: 5px 0;
  }
  & a:hover {
    text-decoration: underline;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export const RightContainer = styled.div`
  width: 30%;
  padding-left: 100px;
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & h2 {
    font-size: 22px;
    margin: 5px 0;
    font-weight: normal;
  }
  & li {
    font-size: 15px;
    margin: 5px 0;
  }
  & a:hover {
    text-decoration: underline;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export const PopupContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  z-index: 1002;
  position: absolute;
  overflow: hidden;
`;
export const PopupChild = styled.div`
  width: 553px;
  margin: auto;
  text-align: center;
  padding: 12px 12px 0 12px;
  overflow: hidden;
  background-color: #fff;
  animation: topToBottom 0.5s ease-in-out;

  @keyframes topToBottom {
    0% {
      transform: translateY(1000px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
export const InnerChild = styled.div`
  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 20px;
    letter-spacing: 0.01em;
    margin-top: 36px;
    text-align: center;
  }
  h3 {
    display: block;
    font-style: normal;
    text-align: center;
    margin: 12px auto auto;
    max-width: 350px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    margin: 12px auto auto;
    text-align: center;
  }
`;
export const QrBox = styled.div`
  position: relative;
  button {
    position: absolute;
    right: 12px;
    z-index: 99;
  }
  img {
    width: 128px;
    height: 128px;
    display: block;
    margin: auto;
    box-shadow: 0 4px 10px rgb(0 0 0 / 12%);
    border: 10px solid #fff;
  }
`;
export const Mobile = styled.img`
  width: 294px;
  height: 287px;
  bottom: 0;
  display: block;
  margin: 33px auto auto;
`;
export const MobileDisplay = styled.div`
  display: none;
  div {
    display: flex;
    width: 100%;
    padding: 10px 0;
    justify-content: space-between;
    border-top: 1px solid black;
  }
  & h2 {
    font-size: 22px;
    margin: 5px 0;
    font-weight: normal;
  }
  & li {
    font-size: 15px;
    margin: 5px 0;
  }
  & a:hover {
    text-decoration: underline;
  }
  @media (max-width: 992px) {
    display: block;
    margin: auto;
    padding: 10px;
  }
`;
