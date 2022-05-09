import { useState } from "react";
import "./sign_up_login.css";
import { useGlobalContext } from "../../contextAPI";
import { useNavigate } from "react-router-dom";
import {
  BsFillSuitHeartFill,
  BsFillSaveFill,
  BsFillBellFill,
} from "react-icons/bs";

const SignUp = () => {
  //Hooks
  const [personDetail, setPersonDetail] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { store, addNewUser } = useGlobalContext();
  const navigate = useNavigate();

  // functions
  const checkValidity = (detail) => {
    if (detail.password !== detail.confirmPassword) {
      setErrorMessage("Password did not match");
      return false;
    }

    if (detail.password === "") {
      setErrorMessage("Password is required");
      return false;
    }

    if (detail.password.length < 8) {
      setErrorMessage("Password must be of atleast 8 charcters");
      return false;
    }

    if (detail.email === "") {
      setErrorMessage("Email is required");
      return false;
    }

    let userExist = false;
    store.getState().login.userList.forEach((item) => {
      if (item.email === detail.email) {
        userExist = true;
      }
    });
    if (userExist) {
      setErrorMessage("User already Exist. Please login!");
      return false;
    }

    setErrorMessage("");
    return true;
  };
  // handlers
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "email") {
      value = value.toLowerCase();
    }
    setPersonDetail({ ...personDetail, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidity(personDetail)) {
      addNewUser(personDetail);
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up__content-container">
        <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="chandanbtn">
            <button onClick={() => navigate("/signup")}>New to Lyst?</button>
            <button onClick={() => navigate("/login")}>Already a member</button>
          </div>

          <div>
            <h1 className="drj">Search thousands of</h1>
            <h1 className="drj">fashion brands and stores</h1>
            <h1 className="drj">all in one place</h1>
          </div>

          <div>
            <p className="adi">We just need a few details from you first.</p>
          </div>

          {/* <fieldset className="sign-up-form__input-container"> */}

          <div className="rgi">
            <div>
              <label className="rgl" htmlFor="sign-up__email">
                Name
              </label>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={personDetail.name}
              id="sign-up__name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="rgi">
            <div>
              <label className="rgl" htmlFor="sign-up__email">
                Mobile Number
              </label>
            </div>
            <input
              type="number"
              name="number"
              placeholder="Enter your contact number"
              value={personDetail.number}
              id="sign-up__number"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="rgi">
            <div>
              <label className="rgl" htmlFor="sign-up__email">
                Email Address
              </label>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={personDetail.email}
              id="sign-up__email"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="rgi">
            <div>
              <label className="rgl" htmlFor="sign-up__password">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              placeholder="min 8 characters"
              value={personDetail.password}
              id="sign-up__password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="rgi">
            <div>
              <label className="rgl" htmlFor="sign-up__confirm-password">
                Confirm Password
              </label>
            </div>
            <input
              type="text"
              name="confirmPassword"
              placeholder="Enter the correct password"
              value={personDetail.confirmPassword}
              id="sign-up__confirm-password"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="rgc">
            <input type="checkbox" />
            <label>
              {" "}
              I would like to hear about products, services, and sales,
              including personalized email alerts from Lyst. You can unsubscribe
              at any time.
            </label>
          </div>

          {errorMessage && (
            <p className="sign-up-form__error-message">{errorMessage}</p>
          )}

          <button type="submit" className="sign-up__submit-btn">
            Join Lyst
          </button>

          <div className="tc">
            <p>
              By creating an account, you consent to Lyst’s Terms & Conditions.
              To learn more about how Lyst uses and protects your personal data,
              please read Lyst’s Privacy Policy.
            </p>
          </div>

          {/* </fieldset> */}
        </form>
      </div>

      <div className="right_div">
        <div className="dabba">
          <h2>As a Lyst member you can ...</h2>
          <div className="rgr">
            <div>
              <BsFillSaveFill size={25} />
            </div>
            <div>Save your searches</div>
          </div>
          <div className="rgr">
            <div>
              <BsFillSuitHeartFill size={25} />
            </div>
            <div>Create a wishlist</div>
          </div>
          <div className="rgr">
            <div>
              <BsFillBellFill size={25} />
            </div>
            <div>Get alerts on your items</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
