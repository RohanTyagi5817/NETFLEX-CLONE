import "./Signup.css";
import logo from "../../assets/logo.png";
import { signup } from "../../firebase";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars

const Signup = () => {
  const [loading, setLOading] = useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setLOading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signup(name, email, password).then(() => {
      setLOading(false);
    });
  }
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>Sign up</h1>
        <form onSubmit={onSubmit} method="post">
          <input type="text" name="name" placeholder="Your name" />

          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button
            type="submit"
            className={`${loading ? "disabled-button" : " "}`}
            disabled={loading}
          >
            Sign up now
          </button>
          <div className="form-help">
            {/* <div className="remember">
              <input type="checkbox" />
              <label htmlFor=""> Remember Me</label>
            </div> */}
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            <p>
              Already have account?
              <a href="/login">Sign In Now</a>
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default Signup;
