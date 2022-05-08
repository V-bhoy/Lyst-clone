import React from 'react'
import {useNavigate} from "react-router-dom"
import styles from './Payment.module.css'
import CartItemSummry from "./CartItemSummry"
import {
    RightInnerBox,
    GiftCard,
    PriceBox,
    TotalBox,
    ProdSummryBox,
    RightBox,
    ProductDiv,
    ProdImgData,
    ProdImg,
    ProdDetails,
    ProdPrice,
  } from "./StyledComponents/CartItemSummryStyled";

const Payment = () => {

  const navigate = useNavigate();      // navigate
  

  let name = document.getElementById("arg");
  let phone = document.getElementById("brg");
  let address = document.getElementById("crg");

  let userObj = {
    email : "rg660322@gmail.com",
    name: "Rahul",
    phone:6307382388,
    address:"Bhujauli Colony Deoria"
  }

  // userArr.push(userObj);
  localStorage.setItem("userData", JSON.stringify(userObj))

  //original Part

  let userArr = JSON.parse(localStorage.getItem("userData"));


  return (
    <div style={{display: "flex"}}>
      <div  className= {styles.mainrg}>
        <div  className={styles.paymentrg}>
           <h1 style={{marginLeft:"20px", fontFamily:"Helvetica", fontSize:"30px", fontWeight:"bold"}}>PAYMENT</h1>
           <div  className={styles.paprg}>
             <div>
               <button>Cart   ></button>
             </div>
             <div>
               <button>Information   ></button>
             </div>
             <div>
               <button>Shipping   ></button>
             </div>
             <div>
               <button>Payment   ></button>
             </div>
           </div>

           <div  className={styles.acrg}>
              <div>
                 <div>Contact : </div>
                 <div style={{fontWeight:"545", fontSize:"16px", fontFamily:"Helvetica"}}> <p id="arg">{userArr.email}</p> </div>
                 <div style={{color:"grey", fontWeight:"520", fontFamily:"Helvetica", fontSize:"14px", cursor: "pointer"}} >Change</div>
              </div>

              <div>
                <div>Phone : </div>
                <div style={{fontWeight:"545", fontSize:"16px", fontFamily:"Helvetica"}}><p id="brg">{userArr.phone}</p></div>
                <div style={{color:"grey", fontWeight:"520", fontFamily:"Helvetica", fontSize:"14px", cursor: "pointer"}} >Change</div>
              </div>

              <div>
                <div>Address : </div>
                <div style={{fontWeight:"545", fontSize:"16px", fontFamily:"Helvetica"}}><p id="crg">{userArr.address}</p></div>
                <div style={{color:"grey", fontWeight:"520", fontFamily:"Helvetica", fontSize:"14px", cursor: "pointer"}} >Change</div>
              </div>

           </div>
           <div style={{marginLeft:"20px"}}>
             <h3 style={{marginBottom:"10px", marginTop:"80px" , fontFamily:"Helvetica", fontSize:"20px", fontWeight:"560"}}>Payment Options</h3>
             <p>All transactions are secure and encrypted.</p>
           </div>
           <div className={styles.raj}>
               <div  className={styles.raja}>
                 <h3><input type="radio" style={{height: "20px" , width: "50px"}}/>Credit Card</h3>
                 <div style={{border:"1px solid grey"}}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvjO06ZGc71cy-mKJAXDvCiFSnLPOQSsq0x5mFKA-2v6K7SYmMDPNYa65sb4_GMil73Y&usqp=CAU" alt="" height="15px" width="40px" />
                 </div>
                 <div style={{border:"1px solid grey"}}>
                   <img src="https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" alt="" height="15px" width="40px" />
                 </div>
                 <div style={{border:"1px solid grey"}}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMwU4yZ8Bean-8w556f2IG5VTEiMq_GcLA42Bvlj6OjMd71KfycJxVolbwgdzkJG-iUAk&usqp=CAU" alt="" height="15px" width="40px" />
                 </div>
                 <div style={{border:"1px solid grey"}}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSbLMnAnX42bmR4cPjh-2n0domW8gH5j63yrxUiNr6twSX7VlKZ1K0qtf2ERZBlRa0sU&usqp=CAU" alt="" height="15px" width="40px" />
                 </div>
               </div>

               <div>
                 <div>
                   <input type="number" placeholder="Card number" maxlength="16" required className={styles.abcrg}/>
                 </div>
                 <div>
                   <input type="text" placeholder="Name on Card" required className={styles.abcrg} />
                 </div>
                 <div style={{display:"flex" , gap:"15px", marginTop:"8px"}}>
                   <div>
                      <input type="text" placeholder="Expiration date(MM/YY)" style={{width:"200px" , marginLeft:"25px"}} requireed className={styles.abcrg}/>
                   </div>
                   <div>
                      <input type="text" required placeholder="Security Code" className={styles.abcrg} style={{width:"205px"}} />
                   </div>
                 </div>

                 <div style={{borderTop:"2px solid grey" , marginTop:"20px"}}  className={styles.raja}>
                   <h3><input type="radio" style={{height: "20px" , width: "50px"}}/>AfterPay</h3>
                   <div>
                     <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/h4d8fozveszevvxogwo7" alt="" width="50px" style={{marginLeft:"20px", height:"28px"}} />
                   </div>
                   <a href="https://www.afterpay.com/global/country-select" style={{marginTop:"-2px" ,color:"black"}}>What is Afterpay?</a>
                 </div>

                 <div  className={styles.raja} >
                    <h3><input type="radio" style={{height: "20px" , width: "50px" }}/>Pay later with Klarna</h3>
                    <div>
                      <img src="https://thumbor.forbes.com/thumbor/660x336/https://www.forbes.com/advisor/wp-content/uploads/2022/03/klarna_logo.jpeg-1.jpg" alt="" height="30px" width="50px" style={{marginLeft:"40px"}} />
                    </div>
                 </div>
                 <div style={{marginLeft:"20px" }}>
                      <h3 style={{marginBottom:"10px", marginTop:"80px" , fontFamily:"Helvetica", fontSize:"20px", fontWeight:"560"}}>Billing Address</h3>
                      <p>Select a address that matches your card or payment method.</p>
                 </div>
                 <div style={{border:"2px solid grey" , marginTop:"20px"}}  className={styles.raja}>
                   <h3><input type="radio" style={{height: "20px" , width: "50px"}}/>Same as shipping address</h3>
                 </div>

                 <div style={{border:"2px solid grey"}} className={styles.raja}>
                    <h3 style={{marginTop:"10px"}}><input type="radio" style={{height: "20px" , width: "50px"}}/>Use a different billing address</h3>
                 </div>

                 <div style={{display:"flex"}}>
                     <div style={{marginTop:"20px"}}>
                       <a href="shipping.jsx"  style={{textDecoration: "none",color:"black"  , fontSize:"18px"}}>Return to shipping</a>
                     </div>
                     <div style={{marginTop:"20px"}}>
                       <button className={styles.rgrg} onClick={() => navigate("/PaymentSuccess")}>Pay now</button>
                     </div>
                 </div>
                 <div  style={{display:"flex", justifyContent: "center"}}>
                       <div style={{marginLeft:"15px" , marginTop:"40px"}}>Refund policy</div>
                       <div style={{marginLeft:"20px" , marginTop:"40px"}}>Privacy policy</div>
                       <div style={{marginLeft:"20px" , marginTop:"40px"}}>Terms of services</div>
                     </div>
               </div>
           </div>

        </div>
      </div>  
      <div style={{marginLeft:"230px", marginTop:"150px"}}>
        <CartItemSummry />
      </div>
    </div>
  )
}

export default Payment;