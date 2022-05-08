import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../contextAPI";
import { BsFillSuitHeartFill , BsFillSaveFill , BsFillBellFill } from "react-icons/bs";
import styles from"./log_in.module.css";

const Login = () => {
  const [personDetail, setPersonDetail] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { verifyUser, loginUser, store } = useGlobalContext();
  const navigate = useNavigate();

  //event handlers
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
    const result = verifyUser(personDetail);
    if (result.verified) {
      setErrorMessage("");
      loginUser(personDetail);
      navigate("../logged-in", { replace: true });
    } else {
      setErrorMessage(result.error);
    }
  };
  return (
    <div>
      <div className={styles.sign_in_container}>
        <div className="login__content-container">

          
              <div className={styles.chandanbtnLogin}>
                <button onClick={() => navigate("/signup")}>New to Lyst?</button>
                <button onClick={() => navigate("/login")}>Already a member</button>
              </div>


          <h3 className={styles.popat}>Sign in</h3>
          <form
            className="login-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* <fieldset className="login-form__input-container"> */}
              <div className={styles.rgil}>
                <div><label  className={styles.rgll}  htmlFor="login__email">Email</label></div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={personDetail.email}
                  id="login__email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={styles.rgil}>
                <div><label  className={styles.rgll}  htmlFor="login__password">Password</label></div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={personDetail.password}
                  id="login__password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {errorMessage && (
                <p className="login-form__error-message">{errorMessage}</p>
              )}

              <button type="submit" className={styles.rg}>
                Sign In
              </button>

              <p className={styles.prg}>or</p>

              <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZO3Gz6oas3O8s0v1EXPW_Axv9AUi1gBVnPbQcOzsVqOjMXcxqQuNV-0pl90g6H1z0dw&usqp=CAU" alt="none" width="99%" height="50px" className={styles.imgrg}/>
              </div>

            {/* </fieldset> */}
          </form>
        </div>
        <div className={styles.right_div_login}>
          <div className="dabba">
             <h2>As a Lyst member you can ...</h2>
             <div className="rgr">
                <div>
                  <BsFillSaveFill size={25}/>
                </div>
                <div>Save your searches</div>
             </div>
             <div className="rgr">
                <div>
                  <BsFillSuitHeartFill size={25}/>
                </div>
                <div>Create a wishlist</div>
             </div>
             <div className="rgr">
                <div>
                  <BsFillBellFill size={25}/>
                </div>
                <div>Get alerts on your items</div>
             </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
