import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <div className="contactcoverdiv">
        <div className="contactinnerdiv">
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

        <div className="contactinnerdiv1">
          <h2>Contact us</h2>
          <p>
            Our team is here to help with any inquiry you might have. To help us
            help you, please see below for the correct contact.
          </p>

          <p className="p1">Are you a customer with a question about shopping on Lyst?</p>

          <p className="p2">
            Visit our{" "}
            <Link className="helpcenter" to={"/help"}>
              Help Center,
            </Link>
            or contact Customer Care at customercare@lyst.com.
          </p>

          <p className="p2">
            Are you a store, brand or designer interested in featuring on Lyst?
          </p>

          <p className="p2">
            Apply{" "}
            <Link className="helpcenter" to={""}>
              here
            </Link>{" "}
            to become a Lyst partner.
          </p>

          <p className="p2">Press inquiries</p>

          <p className="p2">
            For any media inquiries, image requests or interview opportunities
            please contact
            
          </p>
          <Link to={""}>press@lyst.com</Link>
          <h5 className="p2">Registered Office</h5>

          <p className="p2">Lyst Limited</p>
          <p className="p2">Floor 7, The Minster Building</p>
          <p className="p2">21 Mincing Lane</p>
          <p className="p2">London</p>
          <p className="p2">EC3R 7AG</p>
        </div>

       
      </div>
      <div className="helpbutton">
        <img src="https://png.vector.me/files/images/4/0/402353/aiga_information_bg_preview" alt="" />
         <div ><button className="btn">Help</button></div> 
        </div>
    </div>
  );
};
