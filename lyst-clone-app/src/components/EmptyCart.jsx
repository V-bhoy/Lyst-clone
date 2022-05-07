import React from 'react'
import Button from '@mui/material/Button';


export default function () {
    console.log("Empty");
  return (
   <>
        <div style={{textAlign: "center"}}>
            <img style={{width: "70%"}} src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg"
             alt="" />
        </div>

        <div style={{textAlign: "center", marginTop : "20px"}}>
        <Button variant="contained" size="large">SHOP NOW</Button>
        </div>
   </>
  )
}
