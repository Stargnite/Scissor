import { useState, useRef, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider, db } from "../Authentication/Firebase/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { FaGoogle, FaApple, FaRegEye } from "react-icons/fa";
import {AuthContext} from "../../store/auth-context";
import LoadingGIF from "./../../assets/loadingGIF.gif";
import {setDoc, doc } from 'firebase/firestore'

export default function Login() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const authCtx = useContext(AuthContext);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const expirationTime = new Date(new Date().getTime() + 86400000 * 1000);
      authCtx.login(user.email, expirationTime.toISOString(), user);
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error: any) {
      console.log("error:", error);
    }
  };

  const signInWithApple = () => {
    alert("Not available for now, kindly sign in with other options");
    return;
  };

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    (async () => {
      try {
        setIsLoading(true);
        const userCredential = await signInWithEmailAndPassword(
          auth,
         enteredEmail!,
          enteredPassword!
        );
        let user = userCredential.user;
        
        // const ref = doc(db, "users", user.uid)
        // const randomUser = {name: user.email, links_list: "your-link"}
        //  setDoc(ref, randomUser);
        const expirationTime = new Date(new Date().getTime() + 86400000 * 1000);
        authCtx.login(user.email, expirationTime.toISOString(), user);
        navigate("/dashboard");
        console.log("login successful");
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        alert(error.message);
      }
    })();
  };

  return (
    <div className="login-content">
      <div className="auto_login">
        <h5>Log in with:</h5>
        <div className="auto_login_btn">
          <button onClick={signInWithGoogle}>
            <FaGoogle />
            <div className="auto_login_text">Google</div>
          </button>
          <button onClick={signInWithApple}>
            <FaApple />
            <div className="auto_login_text">Apple</div>
          </button>
        </div>
        <p>OR</p>
      </div>
      <form onSubmit={submitLogin} id="log_in">
        <div className="input_fields">
          <input
            type="email"
            id="email"
            placeholder="Email address"
            ref={emailInputRef}
            required
          />
          <div className="password_cont">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              ref={passwordInputRef}
              required
            />
            <FaRegEye
              className="pass_toggle"
              onClick={togglePasswordVisibility}
            />
          </div>

          <a href="" className="forgot">
            <p>Forgot your password?</p>
          </a>
        </div>
        <button className="login_btn" disabled={isLoading} type="submit">
          {isLoading ? (
            <img src={LoadingGIF} alt="Loading..." className="loading" />
          ) : (
            "Log in"
          )}
        </button>
        <p className="to_signup">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
      <div className="terms_condition">
        By signing in with an account, you agree to Sciccor's{" "}
        <a href="">Terms of Service</a>, Privacy Policy and{" "}
        <a href="">Acceptable Use Policy.</a>
      </div>
    </div>
  );
}
