import React from 'react'
import items from '../data/list.json'
import styled from 'styled-components'
import HomeNavItem from './HomeNavItem'

const HomeNavBar=styled.div`
   cursor: e-resize;
   padding-bottom: 20px;
   border: none;
   display: flex;
   overflow-x: scroll;
   &::-webkit-scrollbar{
     display: none;
   }
`;

const HomeNav = () => {
  return (
    <HomeNavBar>
      {items.map((item,index)=><HomeNavItem key={index} item={item}/>)}
    </HomeNavBar>
    
  )
}

export default HomeNav
