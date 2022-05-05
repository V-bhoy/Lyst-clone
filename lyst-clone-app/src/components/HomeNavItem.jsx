import React, {useState} from 'react'
import styled from 'styled-components';

const NavItem = styled.div`
   height: 450px;
   margin-top: 20px;
   display: flex;
   flex-direction: column;
    min-width: 255px;
  // border: 1px solid;
   //position: relative;
   @media only screen and (max-width: 575px){
       min-width: 80px;
       padding-top: 10px;
   } 
`;
const NavSpan= styled.span`
   display: none;
   font-weight: 300;
   font-size: 35px;
   &:hover{
       color: black;
   }
   @media only screen and (max-width: 575px){
       display: block;
   } 
`;
const NavTitle = styled.div`
   height: 60px;
   //border: 1px solid;
   display: flex;
   align-items: center;
   font-size: 35px;
   white-space: nowrap;
   margin-left: -190px;
   transform: translateY(190px)  rotate(-90deg);
   cursor: pointer;
   &:hover{
       color: #8735ea;
   }
    @media only screen and (max-width: 575px){
       //position: absolute;
       transform-origin: 0 0;
       transform: translateY(430px)  rotate(-90deg);
       margin-left:10px;
       height: 50px;
       width: 400px;
   } 
`;
const NavSubBox = styled.div`
   width: 195px;
   margin-left: 70px;
   margin-top: auto;
   @media only screen and (max-width: 575px){
       display: ${props=>props.show?"block":"none"};
       z-index: 4;
       background-color: white;
   }
`;
const NavList = styled.ul`
   list-style: none;
   /* @media only screen and (min-width: 575px){
       display: ${props=>props.show?"block":"none"};
   } */
`;
const NavListItem = styled.li`
   font-size: 14px;
   font-weight: bold;
   line-height: 26px;
   white-space: nowrap;
   cursor: pointer;
   &:hover{
       text-decoration: underline;
   }
`;

const HomeNavItem = ({item}) => {
    const [sign,setSign] = useState("+");
    const [show, setshow] = useState(false);
    
    const showList=()=>{
        if(sign==="+"){setSign("-")}else{setSign("+")};
        //console.log(sign)
        if(sign==="+"){setshow(true)}else{setshow(false)};
       // console.log(show)
    } 


  return (
    <NavItem>
        <NavTitle><NavSpan onClick={()=>showList()}>{sign}&nbsp;</NavSpan>{item.title}</NavTitle>
        <NavSubBox show={show} >
            <NavList >
                {item.data.map((elem,index)=>(<NavListItem  key={index}>{elem.text}</NavListItem>))}
            </NavList>
        </NavSubBox>
    </NavItem>
  )
}

export default HomeNavItem