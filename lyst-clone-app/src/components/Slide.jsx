import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom'

const Wrapper = styled.div``;
const Slider = styled.div`
     display: flex;
     height: ${props=>props.type==="sec-slide"?350:300}px;
     overflow-x: auto; 
      scrollbar-width: none; // for firefox
      -ms-overflow-style: none; //for Edge
     &::-webkit-scrollbar{
       display: none;
     }
     border-bottom: 1px solid black;
     ${mobile({
        height: "190px",
     })}
`;
const Item= styled.div`
    min-width: ${props=>props.type==="sec"?436:400}px ;
    height: 100%;
    display: flex;
    border-left: 1px solid black;
    position: ${props=>props.type==="sec"?"relative":"none"};
    ${mobile({minWidth:"228px"})}
`;
const ItemTitle= styled.div`
   width: 100px;
   height: 100%;
   position : relative ;
   overflow: hidden;
`;
const Title= styled.h3`
    position: absolute;
    transform: rotate(-90deg);
    transform-origin: bottom left;
    left: 100%;
    bottom: 0px;
    padding: 5px;
    width: 300px;
    color: black;
    font-size: 23px;
    font-weight: bold;
`;
const Image= styled.img`
    width: 300px;
    height: 100%;
`;
const Para = styled.p`
   font-size:70px;
   margin:30px;
   font-weight:bold;
   line-height:0.8;
   letter-spacing:-2px;
   ${mobile({fontSize:"32px",margin:"5px"})}
`;
const SecTitle = styled.h4`
   font-size: 22px;
   margin: 30px 0 0 30px;
   ${
      mobile({
         fontSize: "16px",
         margin: "5px 0 0 5px"
      })
   }
`;
const SecImage = styled.img`
   max-width: 100%;
   border: 0px;
   position: absolute;
   right: 0;
   bottom: 0;
   width: 363px;
   height: 262px;
   ${mobile({
      width: "196px",
      height: "136px"
   })}
`;

const Slide = () => {
  return (
    <> 
    <Wrapper>
       <Slider style={{borderTop:"1px solid black"}}>
          <Link to="#">
        <Item>
           <ItemTitle>
              <Title>CRISP MONOCHROME</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/Image_from_i_OS_570_8c4ba5ce61.png" alt='CRISP MONOCHROME'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>ONE STEP AHEAD</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/OSA_24_03_22_09a1fa2732.jpeg" alt='ONE STEP AHEAD'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>REFINED GLAMOUR</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/REFINED_GLAMOUR_c966d97813.jpeg" alt='REFINED GLAMOUR'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>NEW CLASSICS</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/NEW_CLASSICS_f5f19784b9.jpeg" alt='NEW CLASSICS'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>30 UNDER 300</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/17537008_38224404_800_7b2d22a8aa.png" alt='30 UNDER 300'/>
        </Item>
      </Link>
    </Slider>
    <Slider >
    <Link to="#">
        <Item>
           <ItemTitle>
              <Title>ITALIST: SHOP DESIGNER BRANDS & SAVE UP TO 70%<sup>*</sup></Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/JPG_SS_22_RTW_TOP_THE_ATTICO_PANTS_DOLCE_and_GABBANA_BAG_PRADA_WOMAN_1_8a2611b9e1.jpg" alt='ITALIST'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>DISCOVER THE ICONIC MYEA BAG - EMPORIO ARMANI</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/EA_My_EA_Bags_HP_Top_Lyst_3ab19a30d3.jpg" alt="MYEA BAG"/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>MICHAEL KORS: YOUR FAVORITE STYLES ARE WAITING AND ON SALE </Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/LINA_BAG_ASSET_600x600_01800ffbe1.jpg" alt='MICHAEL KORS'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>THE MULBERRY SOFTIE - A BAG MADE TO BE SQUEEZED</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/Screenshot_2022_03_08_at_14_40_26_4809776918.png" alt='MULBERRY SOFTIE'/>
        </Item>
      </Link>
      <Link to="#">
        <Item>
           <ItemTitle>
              <Title>ENJOY 30% OFF SELECTED MUST-HAVE PIECES ON 24S</Title>
           </ItemTitle>
           <Image src="https://cdna.lystit.com/cms/600x600_HP_TOP_LYST_03befce6d4.png" alt='24S'/>
        </Item>
      </Link>
    </Slider>
 </Wrapper>
 <Wrapper style={{marginTop:"10%"}}>
     <Slider type="sec-slide" style={{borderTop: "1px solid black"}}>
        <Item type="sec" style={{backgroundColor:"#f5f4f2", cursor:"e-resize"}}>
           <Para>BREAKOUT BRANDS</Para>
        </Item>
        <Item type="sec" >
             <SecTitle>PATOU</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/My_Post_81_76121ffa01.jpg" alt="Patou"/>
        </Item>
        <Item type="sec" >
             <SecTitle>GUCCI</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_rail_gucci_eca9e74796.jpg" alt="GUCCI"/>
        </Item>
        <Item type="sec" >
             <SecTitle>SAINT LAURENT</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_rail_saint_laurent_2031eb80f7.jpeg" alt="SAINT LAURENT"/>
        </Item>
        <Item type="sec" >
             <SecTitle>OFF-WHITE C/O VIRGIL ABLOH</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_rail_off_white_co_virgil_abloh_d8c6b37a9f.jpeg" alt="VIRGIL ABLOH"/>
        </Item>
        <Item type="sec" >
             <SecTitle>BALENCIAGA</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_rail_balenciaga_215cbc0fe0.jpeg" alt="BALENCIAGA"/>
        </Item>
        <Item type="sec" >
             <SecTitle>NIKE</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_rail_nike_c3045162ba.png" alt="NIKE"/>
        </Item>
        <Item type="sec" >
             <SecTitle>DOLCE & GABBANA</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_rail_dolce_gabbana_bcb7049bb0.jpeg" alt="DOLCE & GABBANA"/>
        </Item>
        <Item type="sec" >
             <SecTitle>MONOCLER</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_rail_moncler_bcdcdc131d.jpeg" alt="MONOCLER"/>
        </Item>
        <Item type="sec" >
             <SecTitle>VALENTINO</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_rail_valentino_421c18fab0.jpeg" alt="VALENTINO"/>
        </Item>
     </Slider>
     <Slider type="sec-slide">

        <Item type="sec" >
             <SecTitle>BALENCIAGA EARRINGS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/balenciaga_earrings_28c5ac2ab9.jpeg" alt="Balenciaga Earrings"/>
        </Item>
        <Item type="sec" >
             <SecTitle>SIMONE ROCHA EARRINGS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/simone_rocha_earrings_d997cb6315.jpeg" alt="Simone Rocha Earrings"/>
        </Item>
        <Item type="sec" style={{backgroundColor:"#f5f4f2", cursor:"e-resize"}}>
           <Para >TRENDING NOW</Para>
        </Item>
        <Item type="sec" >
             <SecTitle>OFF-WHITE C/O VIRGIL ALBOH SANDALS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/mens_off_white_co_virgil_abloh_sandals_5c477cbb4a.jpeg" alt="Alboh Sandals"/>
        </Item>
        <Item type="sec" >
             <SecTitle>AMIRI JEANS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/mens_amiri_jeans_98aeae1fcc.jpeg" alt="Amiri Jeans"/>
        </Item>
        <Item type="sec" >
             <SecTitle>FENDI JUMPSUITS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_category_fendi_jumpsuits_9f9ac55f4f.jpeg" alt="Fendi Jumpsuits"/>
        </Item>
        <Item type="sec" >
             <SecTitle>GUCCI SUITS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/mens_gucci_suits_af6c650ce2.jpeg" alt="Gucci Suits"/>
        </Item>

     </Slider>
     <Slider type="sec-slide" >
        
        <Item type="sec" >
             <SecTitle>BALENCIAGA T-SHIRTS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_category_mens_balenciaga_t_shirts_2c33757129.jpeg" alt="Balenciaga T-shirts"/>
        </Item>
        <Item type="sec" style={{backgroundColor:"#f5f4f2", cursor:"e-resize"}}>
           <Para>HOT RIGHT NOW</Para>
        </Item>
        <Item type="sec" >
             <SecTitle>CANALI COATS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_category_mens_canali_coats_fcd56d8791.jpeg" alt="Canali Coats"/>
        </Item>
        <Item type="sec" >
             <SecTitle>CAMILLA DRESSES</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_category_camilla_dresses_ed5dbcc2dc.jpeg" alt="Camilla Dresses"/>
        </Item>
        <Item type="sec" >
             <SecTitle>CHANEL SHOULDER BAGS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_category_chanel_shoulder_bags_969f71f141.jpeg" alt="Chanel Shoulder Bags"/>
        </Item>
        <Item type="sec" >
             <SecTitle>BALENCIAGA SHOULDER BAGS</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/balenciaga_shoulder_bags_3febdd5725.jpeg" alt="Balenciaga Shoulder Bags"/>
        </Item>
        <Item type="sec" >
             <SecTitle>GIORGIO ARMANI SUNGLASSES</SecTitle>
             <SecImage src="https://cdna.lystit.com/cms/designer_category_mens_giorgio_armani_sunglasses_80768d4fe9.jpeg" alt="Giorgio Armani Sunglasses"/>
        </Item>

     </Slider>
 </Wrapper>
 </> 
  )
}

export default Slide