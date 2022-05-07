import React from "react";
import "./Helpcenter.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import img1 from "../img/orders.png";
import img2 from "../img/payment&promotion.png";
import img3 from "../img/retailers.png";
import img4 from "../img/shipping.png";
import img5 from "../img/returns.png";
import img6 from "../img/account&email.png";

export const Helpcenter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="helpcenter">
        <div className="lyst">
          <Link className="lyst" to="/">
            LYST
          </Link>
        </div>
        <div className="helpdiv">
          <p className="help">HOW CAN WE HELP YOU TODAY?</p>
        </div>
        <div className="inpdiv">
          {/* <form className="fill_form"> */}

          <div className="inpdiv2">
            <input type="text" name="" id="" />
          </div>

          <div className="searchbtn">
            <button onClick={() => navigate("/help")}>
              <img
                className="searchimg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Google_Magnifying_Glass.svg/768px-Google_Magnifying_Glass.svg.png"
                alt=""
              />
            </button>
          </div>

          {/* </form> */}
        </div>
        <div className="populararticles">
          <div>
            <p>Popular articles:</p>
          </div>
          <Link to={""}>Getting Started Checklist,</Link>
          <Link to={""}>Where's my order?,</Link>
          <Link to={""}>What is Klarna?</Link>
        </div>
      </div>

      <div className="helpcenterdiv">
        <div className="helpcenterinnerdiv">
          <p>
            Lyst is the definitive fashion shopping platform, used by millions
            of shoppers globally to search and discover the world’s biggest and
            best selection of fashion brands and stores. Customer success is our
            top priority, so on the rare occasions that something doesn’t go to
            plan, we’ll always do what we can to make it right.
          </p>

          <p className="p1">
            New to Lyst? Have a look at our
            <Link to="">Getting Started Checklist</Link>
            or the FAQ resources below.
          </p>
        </div>
      </div>

      <div className="help6box">
        <div className="help1">
          <img src={img1} alt="" />
        </div>
        <div className="help1">
          <img src={img2} alt="" />
        </div>
        <div className="help1">
          <img src={img3} alt="" />
        </div>
        <div className="help1">
          <img src={img4} alt="" />
        </div>
        <div className="help1">
          <img src={img5} alt="" />
        </div>
        <div className="help1">
          <img src={img6} alt="" />
        </div>
      </div>

      <div className="helparticle">
        Or,
        <Link className="article" to={""}>
          browse our full list of help articles
        </Link>
      </div>

      <div className="singleline"></div>

      <div className="prefercontactusmaindiv">
        <h1>PREFER TO CONTACT US?</h1>

        <div className="prefercontactusmaindiv1">
          <p>You can reach our dedicated customer care team by email:</p>
          <Link className="mailid" to={""}>
            customercare@lyst.com
          </Link>

          <p>
            Please note that for order tracking updates, amendments or
            cancellations, you will need to contact the retailer fulfilling your
            order directly
          </p>
        </div>

        <h5>REGISTERED OFFICE</h5>

        <p className="address">
          Lyst Limited
          <br />
          Floor 7, The Minster Building
          <br />
          21 Mincing Lane
          <br />
          London
          <br />
          EC3R 7AG
        </p>

        <Link className="contactcutomer" to={""}>
          <button>Contact Customer Care</button>
        </Link>
      </div>

      <div className="singleline2"></div>

      <div className="footerdiv">
        <div className="footerdivinside">
          <div>
            <span>Lyst Help Center</span>|
            <Link className="backtolyst" to={""}>
              {" "}
              Back to Lyst.com
            </Link>
          </div>

          <div className="dropdownbox">
            <a className="dropdwn">
              <select className="drop1">
                <option value="">English (GB)</option>
                <option value="">Deutsch</option>
                <option value="">Español</option>
                <option value="">Francais (France)</option>
                <option value="">italiano</option>
                <option value="">日本語</option>
                <option value="">Nederlands</option>
                <option value="">Русский</option>
              </select>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
