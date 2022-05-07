import React from 'react'
import styled from 'styled-components'
import { desktop, tablet, mobile } from '../responsive';
import { Link } from 'react-router-dom'
import HomeNav from '../components/HomeNav';
import Slide from '../components/Slide';
import BrandSlider from '../components/BrandSlider';

const Container = styled.div``;
const PortFolio= styled.div`
    width: 100%;
    margin-bottom: 6%;
    margin-top: 80px;
`;
const Poster = styled.img`
    width: 100%;
    height: 100%;
    border-bottom: 1px solid black;
    ${desktop({display:"none"})}
    ${tablet({display:"none"})}
    ${mobile({display: "none",})}
`;

const Poster1 = styled.img`
    width: 100%;
    height: 100%;
    display: none;
    ${desktop({display: "block",})}
    ${tablet({display:"none"})}
    ${mobile({display: "none",})}
`;

const Poster2 = styled.img`
   width: 100%;
   height: 100%;
   display: none;
   ${tablet({display:"block"})}
    ${mobile({display: "none",})}
`;
const Poster3 = styled.img`
   width: 100%;
   height: 100%;
   display: none;
   ${mobile({display: "block",})}
`;

const InnerContainer= styled.div`
  margin-top: 6%;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 992px){display:block; background-color:#f5f4f2}

`;
const Offers= styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 50px 0;
  position: relative;
  flex: 0 0 67% ;
  overflow: initial;
  background-color: #f5f4f2;
  max-width: 100%;
  ${tablet({padding:"0px"})}
  ${mobile({padding:"0px"})}
`;
const List= styled.ul`
  display: flex;
  padding: 30px 0;
  //position: absolute;
  max-width: 900px;
  //right: 0;
  overflow-x: auto;
  list-style: none;
  @media only screen and (max-width: 992px){max-width: none;}
`;
const ListItem = styled.li`
   list-style: none;
   padding: 0 30px;
   flex: 0 1 33.3%;
   @media only screen and (max-width: 992px){padding:20px; flex-basis: 250px; flex-grow: 0; flex-shrink: 0 }
`;
const Num= styled.h2`
  font-size: 110px;
  font-weight: bold;

`;
const ListTitle = styled.h4`
   font-size: 32px;
   line-height: 0.9;
   margin-bottom: 20px;
`;
const ListPara = styled.p`
   font-size: 14px;
   line-height: 24px;
   font-weight: 500;
   margin-bottom: 20px;
`;
const SignupBox= styled.div`
    flex: 1 0 33%;
    border: 1px solid black;
    border-right: none;
    background-color: #cafc4f;
    @media only screen and (max-width: 992px){border-top: none;}
`;
const InnerBox = styled.div`
  height: 100%;
  padding: 132px 50px 182px;
  flex-shrink: 0;
  flex-grow: 1;
  border-right: 1px solid transparent;
  transition: background-color 0.5s ease, border-right-color 0.5s ease;
  &:hover{
     background-color: #c9bffb;
     border-right-color: black;
  }
  @media only screen and (max-width: 992px){padding: 80px 30px 80px;}
`;
const BoxPara= styled.p`
  font-size: 45px;
  margin-bottom: 25px;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -1px;
  color: black;
  font-weight: bolder;
`;
const BoxSpan= styled.span`
   color: white;
   background-color: black;
   padding: 11px 45px;
   border-radius: 1px;
   font-weight: 700;
   font-size: 13px;
`;


const Home = () => {
  return (
    <Container>
        <PortFolio>
          <Poster src="https://cdna.lystit.com/cms/ENG_header_desktop_bddf9b3474_884ff704d3.jpg" alt="poster"/>
          <Poster1 src="https://cdna.lystit.com/cms/ENG_header_desktop_bddf9b3474_884ff704d3.jpg" alt="desktop-poster" />
          <Poster2 src="https://cdna.lystit.com/cms/ENG_header_tablet_test_40933dc911.jpg" alt="tablet-poster"/>
          <Poster3 src="https://cdna.lystit.com/cms/ENG_header_mobile_test_a391a0431f.jpg" alt="mobile-poster"/>
        </PortFolio>
        <Slide />
        <InnerContainer>
           <Offers>
              <List>
                 
                 <ListItem>
                    <Num>1</Num>
                    <ListTitle>THE BIGGEST SELECTION</ListTitle>
                    <ListPara>Shop over 12,000 brands and stores in one place.</ListPara>
                    <ListPara>Find exactly what you want with powerful searchh and personal recommendations.</ListPara>
                 </ListItem>
                 <ListItem>
                    <Num>2</Num>
                    <ListTitle>THE HOTTEST PRODUCTS</ListTitle>
                    <ListPara>See what's new and what's trending.</ListPara>
                    <ListPara>Hit the heart to receive alerts on the latest drops from your favourite brands.</ListPara>
                 </ListItem>
                 <ListItem>
                    <Num>3</Num>
                    <ListTitle>THE BEST PRICES</ListTitle>
                    <ListPara>Compare prices and shipping options across thousands of stores.</ListPara>
                    <ListPara>Lyst members are notified when an item goes on sale.</ListPara>
                 </ListItem>
              </List>
           </Offers>
           <SignupBox>
              <Link to="#">
                  <InnerBox>
                      <BoxPara>Sign Up For Smarter Shopping</BoxPara>
                      <BoxSpan>Join &#8594;</BoxSpan>
                  </InnerBox>
              </Link>
           </SignupBox>
        </InnerContainer>
         <BrandSlider />
         <HomeNav />
    </Container>
  )
}

export default Home