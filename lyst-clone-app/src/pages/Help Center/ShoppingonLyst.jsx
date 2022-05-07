import React from "react";
import "./ShoppingonLyst.css";
import { Link } from "react-router-dom";

export const ShoppingonLyst = () => {
  return (
    <div>
      <div className="coverdiv">
        <div className="innerdiv">
          <div className="line1"></div>

          <div className="supp1">
            <Link className="supp1" to="/help">
              Help Center
            </Link>
          </div>

          <div className="line2"></div>
          <div className="supp2">
            <Link className="supp2" to="">
              Sizing guide
            </Link>
          </div>
          <div className="line3"></div>
          <div className="supp3">
            <Link className="supp3" to="/shoppingonLyst">
              Shopping on Lyst
            </Link>
          </div>
          <div className="line4"></div>
          <div className="supp4">
            <Link className="supp4" to="">
              Intellectual property
            </Link>
          </div>
          <div className="line5"></div>
          <div className="supp5">
            <Link className="supp5" to="">
              Terms & conditions
            </Link>
          </div>
          <div className="line6"></div>
          <div className="supp6">
            <Link className="supp6" to="">
              Privacy policy
            </Link>
          </div>
          <div className="line7"></div>
          <div className="supp7">
            <Link className="supp7" to="">
              Cookie policy
            </Link>
          </div>
          <div className="line8"></div>
          <div className="supp8">
            <Link className="supp8" to="/contact-us">
              Contact us
            </Link>
          </div>
          <div className="line9"></div>
        </div>
        <div className="innerdiv1">
          <h2 className="head1">Shopping on Lyst</h2>
          <p className="para1">
            You can now shop from featured retailers directly on Lyst. Whenever
            you see a product with the "Add to Bag" button, you can place an
            order with the featured retailer through Lyst. The retailer will
            then process, fulfill and deliver the item to you.
          </p>
          <h3 className="head2">Placing Orders</h3>
          <p>
            To place an order on Lyst, simply select a size, if necessary, and
            click the "Add to Bag” button. Guest checkout is available although
            we recommend you sign in for faster checkout. You will have an
            opportunity to review your complete order before you submit your
            purchase. We will place your order with the supplying store who will
            send you a confirmation email that the order has been received.
          </p>
          <p className="para2">Shipping Information</p>
          <p>
            ​Shipping options vary by store and delivery destination. We will
            display an estimated shipping cost at the beginning of the checkout
            process. This is based on the best standard domestic options offered
            by the store. As you go through the checkout process you will be
            given the shipping choices as offered by the store for your
            destination.
          </p>
          <p className="para2">Returns & Exchanges</p>
          <p>
            Returns and exchange policies vary by store and we would advise
            checking their website for the most detailed information about
            return policies.
          </p>

          <div className="notediv">
            <div className="note"></div>
            <div className="notepara">
              Please Note
              <p>
                Although we try very hard to keep this information up to date,
                we cannot guarantee the accuracy of the information presented
                and cannot be held liable for mistakes. It is only meant to be
                indicative and is in no way comprehensive. Please refer to the
                retailer’s own website for more detailed information including
                exceptions and restrictions.
              </p>
            </div>
          </div>
          <p className="para2">Payment Security</p>
          <p>
            Your security is important to us. Lyst uses the industry standard
            protocol known as Transport Layer Security (TLS), which encrypts
            potentially sensitive information for all data transmission.
          </p>
          <p>
            If you purchase an item as a registered member, some of your payment
            details will be saved for faster checkout in the future. We only
            display the last 4 digits of your credit card and the expiration
            date.
          </p>
          <p>
            To keep this information secure we will always ask for your username
            and password during checkout.
          </p>
          <p>
            If you are using Klarna checkout, any storage, transmission,
            processing or handling of customer information by Klarna will be
            governed by Klarna’s terms and conditions which can be viewed{" "}
            <Link className="klarna" to="">
              here.
            </Link>
          </p>
          <p>
            If you change your password, all your payment details are
            automatically deleted and you will need to fill in your payment
            details again during your next purchase. We will also notify you via
            email.
          </p>
        </div>
      </div>
    </div>
  );
};
{
}
