import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider, db } from "../Authentication/Firebase/firebase";
import { FaGoogle, FaApple, FaRegEye } from "react-icons/fa";
import {AuthContext} from "../../store/auth-context";
import LoadingGif from "../../assets/loadingGIF.gif";
import classes from "./Signup.module.css";
import {setDoc, doc } from 'firebase/firestore'



const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmedPass, setConfirmedPass] = useState("");

  const usernameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signUpWithGoogle = async () => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const ref = doc(db, "users", user.uid)
      const randomUser = {name: user.email, generated_links: []}
      setDoc(ref, randomUser);
      const expirationTime = new Date(new Date().getTime() + 86400000 * 1000);
      authCtx.login(user.email, expirationTime.toISOString(), user);
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error: any) {
      alert(error.message);
      console.log("error:", error.message);
    }
  };

  const signInWithApple = () => {
    alert("Not available for now, kindly sign in with other options");
    return;
  };

  const submitSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredUsername = usernameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    let enteredPassword;
    if (passwordInputRef.current?.value === confirmedPass) {
      enteredPassword = passwordInputRef.current?.value;
    } else {
      alert("Password don't match");
      return;
    }

    (async () => {
      try {
        setIsLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          enteredEmail!,
          enteredPassword!
        );
        const user = userCredential.user;
        // return db.firestore.collection('users').doc(user.uid).set({
        //   username: user.displayName,
        // })
        const ref = doc(db, "users", user.uid)
        const randomUser = {name: user.email, generated_links: []}
        setDoc(ref, randomUser);
        localStorage.setItem("enteredUsername", enteredUsername!);
        console.log(user.displayName);
        const expirationTime = new Date(new Date().getTime() + 86400000 * 1000);
        authCtx.login(user.email, expirationTime.toISOString(), user);
        navigate("/dashboard");
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        alert(error.message);
        return;
      }
    })();
  };

  return (
    <div className={classes.signup_content}>
      <div className={classes.auto_signup}>
        <h5>Sign up with:</h5>
        <div className={classes.auto_signup_btn}>
          <button onClick={signUpWithGoogle}>
            <FaGoogle />
            <div className={classes.auto_signup_text}>Google</div>
          </button>
          <button>
            <FaApple onClick={signInWithApple} />
            <div className={classes.auto_signup_text}>Apple</div>
          </button>
        </div>
        <p>OR</p>
      </div>
      <form onSubmit={submitSignUp} className={classes.sign_up}>
        <div className={classes.input_fields}>
          <input
            type="text"
            id="username"
            placeholder="Username"

            ref={usernameInputRef}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email address"
            ref={emailInputRef}
            required
          />
          <div className={classes.password_cont}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              ref={passwordInputRef}
              required
            />
            <FaRegEye
              className={classes.pass_toggle}
              onClick={togglePasswordVisibility}
            />
          </div>

          <div className={classes.password_cont}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmedPass(e.target.value)}
              required
            />
            <FaRegEye
              className={classes.pass_toggle}
              onClick={togglePasswordVisibility}
            />
          </div>

          <p className={classes.pass_desc}>
            6 or more characters, one number, one uppercase & one lower case.
          </p>
        </div>

        <button
          className={classes.signup_btn}
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <img
              src={LoadingGif}
              alt="Loading..."
              className={classes.loading}
            />
          ) : (
            "Sign up"
          )}
        </button>

        <p className={classes.to_login}>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
      <div className={classes.terms_condition}>
        By signing up, you agree to <br /> Scissor's
        <a href="">Terms of Service</a>, <a href="">Privacy Policy</a> and{" "}
        <a href="">Acceptable Use Policy.</a>
      </div>
    </div>
  );
};

export default Signup;
