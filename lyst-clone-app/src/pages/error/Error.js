import { TiWarning } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <section className="error-container">
      <section className="error">
        <div className="error__message">
          <TiWarning className="error__icon" size={200} />
          <p>Opps! Something went wrong.</p>
        </div>
        <button className="error__button">
          <Link to="/">Back to Feedback form</Link>
        </button>
      </section>
    </section>
  );
};

export default Error;
