import React, { useEffect, useState } from "react";
import EmptyCart from "../components/EmptyCart";
import CartItem from "../components/CartItem";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { getCartData } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import {
  CartPage,
  CartLeft,
  CartRight,
  CartHead,
  CartTotal,
  CartSubtotal,
  CartCoupon,
  CheckOut,
  CouponInput,
  CouponSubmit,
  BorderDiv,
} from "../components/cartStyled";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Cart() {
  const { isCouponUsed, cartData, totalAmount, totalItem } = useSelector(
    (state) => state.cart
  );

  const [codeInput, setCodeInput] = useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    getCartData(dispatch);
  }, [dispatch]);

  const updateSubtotal = (codeInput) => {
    if (
      (codeInput === "MASAI30" || codeInput === "masai30") &&
      isCouponUsed === false
    ) {
      dispatch({ type: "UPDATE_TOTAL" });
      handleClick();
      setMessage("success");
    } else if (isCouponUsed === true) {
      handleClick();
      setMessage("error");
    } else {
      handleClick();
      setMessage("info");
    }
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [cartData]);

  if (cartData.length === 0) {
    return (
      <>
        <EmptyCart />
      </>
    );
  }

  return (
    <>
      <CartHead>
        YOUR SHOPPING BAG : You Have Total {totalItem} Items In Your Bag
      </CartHead>
      <div style={{ height: "50px", textAlign: "center", marginTop: "10px" }}>
        <CheckOut>PROCEED TO CHECKOUT</CheckOut>
      </div>
      <BorderDiv
        style={{
          borderBottom: "0.5px solid grey",
          marginTop: "0px",
          height: "20px",
          width: "90%",
          margin: "auto",
        }}
      >
        <CartTotal>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>SubTotal</h4>
        </CartTotal>
      </BorderDiv>
      <CartPage>
        <CartLeft>
          {cartData.map((prod, index) => (
            <CartItem key={index} {...prod} />
          ))}
        </CartLeft>

        <CartRight>
          <CartCoupon>
            <CouponInput
              type="text"
              placeholder='USE "MASAI30" & GET 30% OFF'
              value={codeInput}
              onInput={(e) => setCodeInput(e.target.value)}
            />
            <CouponSubmit
              type="submit"
              value="USE CODE"
              onClick={() => updateSubtotal(codeInput)}
            />
          </CartCoupon>

          <CartSubtotal>
            <h3 style={{textAlign: "right"}}>Grand Total : &#8377; {totalAmount}</h3>
            <br />
            <CheckOut style={{ marginRight: "30px", position: "relative" }}>
              PROCEED TO CHECKOUT
            </CheckOut>
          </CartSubtotal>
        </CartRight>
      </CartPage>
      )
      {message === "success" && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            sx={{ width: "100%" }}
            severity="success"
          >
            Code Applied succesfully!
          </Alert>
        </Snackbar>
      )}
      {message === "error" && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} sx={{ width: "100%" }} severity="error">
            Code Already applied!
          </Alert>
        </Snackbar>
      )}
      {message === "info" && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} sx={{ width: "100%" }} severity="info">
            Please Enter a valid code!
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
