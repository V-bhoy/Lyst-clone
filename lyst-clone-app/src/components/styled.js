import styled from "styled-components"

export const CartHead = styled.div`
margin-left: 80px;
`;

export const CartPage = styled.div`
width: 90%;
margin: auto;
`;

export const CartTotal = styled.div`
display : flex;
width: 30%;
position : absolute;
right: 4%;
justify-content: space-around; 
`;

export const Flex = styled.div`
display : flex;
height: 160px;
align-items : center;
border-bottom : 0.5px solid grey;

`;

export const CartLeft = styled.div`
width : 100%;
`;

export const CartRight = styled.div`
display: flex;
width: 100%;
margin-top: 20px;
`;

export const CartCoupon = styled.div`
width: 60%;
height: 100px
`;

export const CartSubtotal = styled.div`
position : absolute;
right: 2%;
line-height: 1.8;
`;
export const Remove = styled.div`
width : 20%;
`;
export const CartImage = styled.img`
width : 100%;
height : 150px;
`;

export const ItemInfo = styled.div`
width: 40%;
margin-left : 30px;
line-height: 1.8;
`;

export const Counter = styled.div`
display: flex;
`;

export const Increment = styled.i`
border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const Decrement = styled.i`
border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export const ItemCount = styled.input`
width: 25px;
height: 20px;
border: 0.141rem solid var(--primary-color);
box-sizing: border-box;
font-style: normal;
font-weight: normal;
font-size: 18px;
text-align: center;
color: black;
margin: 0 1rem;
border-radius: 2px;
outline: 1px solid gray;
background-color: none;
`;

export const CheckOut = styled.button`
padding: 10px 36px 10px 36px;
font size: 12px;
background-color: black;
color: white;
border: none;
`;

export const CouponInput = styled.input`
width: 400px;
padding: 10px;
`
export const CouponSubmit = styled.input`
background-color: gray;
width: 200px;
padding: 12px;
border: none;
`