import React from 'react'
import styles from './PaymentSuccess.module.css';
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  
  const navigate = useNavigate();

  return (
    <div className={styles.rahul}>
        <div className={styles.placed}>

           <h2 className={styles.heading} style={{color: "maroon"}}>Order Placed Successfully</h2>

           <h2 className={styles.heading} style={{color: "maroon"}}>Thank You!</h2>

          <img src="https://mrhomez.in/wp-content/uploads/2020/11/tick.gif" alt="encrypted" className={styles.logo} />

          <button type="submit" className={styles.morebtn} onClick={() => navigate("/")}>BUY MORE</button>

        </div>
    </div>
  )
}

export default PaymentSuccess;