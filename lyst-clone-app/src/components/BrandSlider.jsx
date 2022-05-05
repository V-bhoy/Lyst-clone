import React from 'react'
import styled from 'styled-components'

const Brands= styled.div`
   height: 325px;
   border-bottom: 1px solid black;
   position: relative;
`;
const BrandTag= styled.h4`
   position: absolute;
   top: 30px;
   width: 310px;
   margin-left: 0px;
   padding-left: 20px ;
   padding-top: 20px;
   display: flex;
   text-align: center;
   align-items: center;
   font-size: 35px;
   line-height: 58px;
   white-space: nowrap;
   transform-origin: 0 0;
   transform: translateY(285px) rotate(-90deg);
   background-color: white;
`;
const BrandWrapper= styled.div`
   max-width: calc(100%-79px);
   flex-grow: 1;
   display: flex;
   flex-direction: column-reverse;
`;
const BrandSlide= styled.div`
   display: flex;
   height: 162.5px;
   gap: 50px;
   justify-content: center;
   align-items: flex-end;
   overflow-x: scroll;
   padding-left: 40%;
   padding-right: 20%;
   &::-webkit-scrollbar{
      display: none;
   }
`;
const BrandItem=  styled.div`
   min-width: 170px;
   font-size: 22px;
   line-height: 20px;
   white-space: pre-wrap;
   padding: 10px;
   font-weight: bold;
   cursor: pointer;
   &:hover{
      color: #8735ea;
   }
`;

const BrandSlider = () => {
  return (
    <>
       <Brands>
           
           <BrandTag>MOST WANTED</BrandTag>
        
        
        <BrandWrapper>
        <BrandSlide style={{alignItems: "center"}}>
           <BrandItem>RICK OWENS GEOBASKET SNEAKERS</BrandItem>
           <BrandItem>NIKE METKON SNEAKERS</BrandItem>
           <BrandItem>SATIN SHORT SLEEVE SHIRTS</BrandItem>
           <BrandItem>KIMONO JACKETS</BrandItem>
           <BrandItem>NIKE AIR FORCE 1 LOW SNEAKERS</BrandItem>
        </BrandSlide>
        <BrandSlide >
           <BrandItem>SNAKESKIN SNEAKERS</BrandItem>
           <BrandItem>CLARK'S WALLABEES</BrandItem>
           <BrandItem>BIAS-CUT DRESSES</BrandItem>
           <BrandItem>ELASTIC-WAIST DRESSES</BrandItem>
           <BrandItem>ZEBRA-PRINT DRESSES</BrandItem>
        </BrandSlide>
        </BrandWrapper>
      </Brands>
    </>
  )
}

export default BrandSlider