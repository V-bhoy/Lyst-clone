import styled from "styled-components";
export const RightBox = styled.div`
  width: 100%;
`;
export const RightInnerBox = styled.div``;
export const ProdSummryBox = styled.div`
  height: 250px;
  overflow-y: scroll;
`;
export const ProductDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  margin: 10px 10px;
`;
export const ProdImgData = styled.div`
  display: flex;
  grid-gap: 10px;
`;
export const ProdImg = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #d9d9d9;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ProdDetails = styled.div``;
export const ProdPrice = styled.div``;

export const GiftCard = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  & input {
    width: 81%;
    font-size: 15px;
    padding: 12px 5px;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }
  & button {
    color: white;
    background-color: #c8c8c8;
  }
`;

export const PriceBox = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  & div {
    display: flex;
    justify-content: space-between;
    & p {
      font-size: 14px;
      padding: 5px 0;
    }
  }
`;
export const TotalBox = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
  & div {
    display: flex;
    grid-gap: 5px;
    align-items: center;
  }
`;
