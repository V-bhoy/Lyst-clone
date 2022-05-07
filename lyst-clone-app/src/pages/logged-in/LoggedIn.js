import { GrStatusGood } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./logged_in.css";

const LoggedIn = () => {
  return (
    <section className="logged-in_container">
      <section className="logged-in">
        <div className="logged-in__message">
          <GrStatusGood className="logged-in__icon" size={200} />
          <p>You are Logged In.</p>
        </div>
      </section>
    </section>
  );
};

export default LoggedIn;
