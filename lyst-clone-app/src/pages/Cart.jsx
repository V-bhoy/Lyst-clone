import React,{ useEffect,useState} from 'react'
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem'
import { getCartData} from '../redux/action';
import { useDispatch, useSelector } from "react-redux";
import { CartPage,
  CartLeft,
  CartRight,
  CartHead,
  CartTotal, 
  CartSubtotal,
  CartCoupon,
  CheckOut,
  CouponInput,
  CouponSubmit,
  BorderDiv} from '../components/cartStyled';


export default function Cart() {
    const {  isCouponUsed, cartData , totalAmount, totalItem} = useSelector((state) => state.cart);

    const [codeInput, setCodeInput] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
      getCartData(dispatch);
    }, [dispatch]);
   
   const updateSubtotal = (codeInput) =>{
     if((codeInput==="MASAI30" || codeInput === "masai30") && isCouponUsed === false){
      dispatch({ type: "UPDATE_TOTAL" ,
     });
    }
    else if(isCouponUsed === true){
      alert("You Have Already Used This Coupon Code");
    }
    else{
      alert("Enter a Valid Coupon Code");
    }
   }
      
      useEffect(() => {
      dispatch({ type: "GET_TOTAL" ,
          
    });
    },[ cartData]);

     if(cartData.length === 0){
       return(
         <>
            <EmptyCart/>
         </>
       )
     }
  
    return (
      <>

        <CartHead>YOUR SHOPPING BAG : You Have  Total {totalItem} Items In Your Bag</CartHead>


         <div style={{height: "50px", textAlign: "center", marginTop: "10px"}}>               
         <CheckOut >PROCEED TO CHECKOUT</CheckOut>
         </div>
         <BorderDiv style={{borderBottom : "0.5px solid grey",marginTop : "0px", height: "20px", width: "90%", margin: "auto",
          }}>
         
            <CartTotal>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>SubTotal</h4>
            </CartTotal>
         </BorderDiv>
          
          <CartPage >
            
          
            <CartLeft>
              
            {cartData.map((prod,index) => (
              <CartItem key={index} {...prod} />
            ))}
            </CartLeft>
         
            <CartRight>
                    <CartCoupon>
                                <CouponInput type="text" placeholder='USE "MASAI30" & GET 30% OFF'
                                 value={codeInput} onInput={e => setCodeInput(e.target.value)}/>
                                <CouponSubmit type="submit" value='USE CODE' 
                                onClick={()=>updateSubtotal(codeInput)}/>
                    </CartCoupon>

                    <CartSubtotal>
                            <h3 >Grand Total : &#8377; {totalAmount}</h3>
                            <br />
                            <CheckOut style={{marginRight: "30px", position : "relative"}}>PROCEED TO CHECKOUT</CheckOut>
                    </CartSubtotal>
                    
            </CartRight>
          </CartPage>
      
        )
       
      </>
    );
}
