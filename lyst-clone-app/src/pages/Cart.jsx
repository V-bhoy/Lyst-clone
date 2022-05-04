import React,{ useEffect} from 'react'
import CartItem from '../components/CartItem'
import { getCartData} from '../redux/action';
import { useDispatch, useSelector } from "react-redux";
import { CartPage,CartLeft,CartRight } from '../components/styled';




export default function Cart() {
    const { isLoggedIn, isError, cartData , totalAmount} = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
      getCartData(dispatch);
    }, [dispatch]);
   
   
  
    useEffect(() => {
      dispatch({ type: "GET_TOTAL" });
    },[ cartData]);
  
    return (
      <>
        <h2>Shopping Bag</h2>
        {isLoggedIn ? (
          <h1>Loading....</h1>
        ) : isError ? (
          <h1>Error.. Something went wrong</h1>
        ) : (
          <CartPage >
            <CartLeft>
            {cartData.map((prod) => (
              <CartItem key={prod.id} {...prod} />
            ))}
            </CartLeft>
            <CartRight>
                <h3>ORDER SUMMARY</h3>
                <span>
                    <h3>Item Subtotal :</h3>
                    <h3>{totalAmount}</h3>
                    
                </span>
            </CartRight>
          </CartPage>
        )}
      </>
    );
}
