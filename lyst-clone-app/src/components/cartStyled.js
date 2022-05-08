import styled from "styled-components";

export const CartHead = styled.div`
  margin-left: 80px;
  margin-top: 150px;
  @media (min-width: 0px) and (max-width: 600px) {
    margin: auto;
  }
`;

export const CartPage = styled.div`
  width: 90%;
  margin: auto;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 80%;
  }
`;

export const CartTotal = styled.div`
  display: flex;
  width: 32%;
  position: absolute;
  right: 4%;
  justify-content: space-around;
`;

export const Flex = styled.div`
  display: flex;
  height: 160px;
  align-items: center;
  border-bottom: 0.5px solid grey;

  @media (min-width: 0px) and (max-width: 600px) {
    border: none;
    height: 240px;
    border-bottom: 1px solid grey;
  }
`;

export const CartLeft = styled.div`
  width: 100%;
  @media (min-width: 0px) and (max-width: 600px) {
  }
`;

export const CartRight = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  @media (min-width: 0px) and (max-width: 600px) {
    display: block;
    align-items: center;
  }
`;

export const CartCoupon = styled.div`
  width: 58%;
  height: 100px;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;

export const CartSubtotal = styled.div`
  width: 42%;
  text-align: right;
  line-height: 1.8;
  margin-right: 30px;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    margin-top : 20px;
    text-align: center;
  }
`;
export const Remove = styled.div`
  width: 25%;
  margin: auto;
  text-align: center;
  @media (min-width: 0px) and (max-width: 600px) {
    margin: auto;
  }
`;

export const ImageDiv = styled.div`
  width: 10%;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 15%;
  }
`;
export const CartImage = styled.img`
  width: 120%;
  height: 150px;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 200%;
    height: 120px;
  }
`;

export const ItemSpec = styled.div`
  width: 35%;
  margin-left: 30px;
  line-height: 1.8;

  @media (min-width: 0px) and (max-width: 600px) {
    margin: auto;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  width: 90%;
  margin-left: 30px;
  line-height: 1.8;
  @media (min-width: 0px) and (max-width: 600px) {
    display: block;
    width: 80%;
    font-size: 80%;
    text-align: center;
    line-height: 0.7cm;
  }
`;

export const Counter = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
export const BorderDiv = styled.div`
  @media (min-width: 0px) and (max-width: 600px) {
    display: none;
  }
`;

export const ItemCount = styled.input`
  width: 50%;
  height: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  color: black;
  margin: 0 1rem;
  border: none;
  background-color: none;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 40%;
  }
`;

export const CheckOut = styled.button`
  padding: 10px 36px 10px 36px;
  font-size: 12px;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: 0;
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 10px 18px 10px 18px;
  }
`;

export const CouponInput = styled.input`

width: 40%;
padding: 10px;
border: 1px solid grey;
@media (min-width: 0px) and (max-width: 600px){
  width: 200px;
}
 }

`;

export const ValueDiv = styled.div`
  display: flex;
  width: 38%;
  justify-content: space-around;
  margin: auto;
  @media (min-width: 0px) and (max-width: 600px) {
    display: block;
    width: 50%;
    margin: auto;
    text-align: center;
    font-type: bold;
  }
`;
export const CouponSubmit = styled.input`
  background-color: gray;
  width: 30%;
  padding: 12px;
  border: none;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 200px;
    margin-top: 10px;
  }
`;

export const CheckOutTop = styled.div`
  width: 90%;
  height: "50px";
  margin : auto;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: right;
  margin-left : 40px;
  @media (min-width: 0px) and (max-width: 600px) {
    padding: 10px 18px 10px 18px;
  }
`;

export const Quantity = styled.h4`
  @media (min-width: 0px) and (max-width: 600px) {
  margin-bottom : 2px;
   font-size: 20px;
  }
`;
