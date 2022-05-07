import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
  margin-top: 100px;
`;
export const LeftBox = styled.div`
  width: 52%;
  /* padding-top: 5px; */
  padding-right: 6%;
  float: left;
  @media (max-width: 1002px) {
    margin: auto;
  }
`;
export const LeftInnerBox = styled.div``;
export const ImageBox = styled.div`
  width: 200px;
  height: 40px;
  margin-bottom: 25px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
export const PageTracker = styled.div`
  display: flex;
  margin: 14px 0;
  & div {
    display: flex;
    align-items: center;
    color: #a6a6a6;
    font-size: 12px;
    &:hover {
      color: black;
    }
    &:active {
      color: black;
    }
  }
`;
export const Details = styled.div`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
`;
export const Contact = styled.div`
  display: flex;
  padding: 3px 5px;
  justify-content: space-between;
`;
export const ShipTo = styled.div`
  display: flex;
  margin-top: 10px;
  padding-top: 12px;
  justify-content: space-between;
  border-top: 1px solid #d9d9d9;
`;
export const IPES = styled.div`
  margin-top: 20px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  & div {
    display: flex;
    grid-gap: 5px;
    align-items: center;
    justify-content: space-between;
    & div {
      display: flex;
      & p {
        font-size: 14px;
        color: #545454;
      }
    }
  }
`;

export const Radio = styled.div`
  width: 18px;
  height: 18px;
  border: 6px solid black;
  border-radius: 50%;
  & div {
    width: 5px;
    height: 5px;
    border: 2px solid white;
    border-radius: 50%;
  }
`;

export const PaymentDiv = styled.div`
  display: flex;
  margin-top: 50px;
  padding-bottom: 56px;
  align-items: center;
  justify-content: space-between;
`;
export const ReturnToInfo = styled.div`
  display: flex;
  color: black;
  align-items: center;
`;
export const PaymentButton = styled.div`
  background-color: black;
  padding: 15px;
  color: white;
`;
export const PolicyDiv = styled.div`
  display: flex;
  grid-gap: 15px;
  padding: 15px 0;
  margin-top: 60px;
  border-top: 1px solid #d9d9d9;
  & p {
    font-size: 12px;
    color: #212121;
  }
`;
export const DekstopView = styled.div`
  width: 45%;
  padding-left: 56px;
  padding-top: 20px;
  border-left: 1px solid #d9d9d9;
  @media (max-width: 1002px) {
    display: none;
  }
`;

export const MobileView = styled.div`
  display: none;
  @media (max-width: 1002px) {
    display: block;
  }
`;
