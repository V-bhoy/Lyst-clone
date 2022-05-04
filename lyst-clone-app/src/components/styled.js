import styled from "styled-components"

export const CartPage = styled.div`
display : flex;
margin-left: 50px;
`;

export const Flex = styled.div`
display : flex;
height: 200px;
align-items : center;

`;

export const CartLeft = styled.div`
width : 70%;
border : 1px solid red;
`;

export const CartRight = styled.div`
width : 30%;
line-height: 1.8;
  border : 1px solid black;
`;

export const CartImage = styled.img`
width : 100px;
height : 150px;
`;

export const ItemInfo = styled.div`
margin-left : 30px;
line-height: 1.8;
`;

export const Counter = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-left : 50px;
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
width: 6rem;
height: 3rem;
border: 0.141rem solid var(--primary-color);
box-sizing: border-box;
font-style: normal;
font-weight: normal;
font-size: 1.6rem;
text-align: center;
text-transform: capitalize;
color: var(--primary-color);
margin: 0 1rem;
border-radius: 0.5rem;
outline: none;
background-color: transparent;
`;