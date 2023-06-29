import classes from "./dashboardNav.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context.jsx";
// import {UseAuth} from "../Authentication/UseAuth";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Firebase/firebase.ts";

const DashboardNav = () => {
  const authCtx = useContext(AuthContext);
  // let username = authCtx.username;
  const navigate = useNavigate();


  const currentUser = localStorage.getItem('username');
  // console.log(currentUser.name);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("log out successful");
      navigate("/login");
      authCtx.logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={classes.dashboard}>
        <div className={classes.dash_nav}>
          <h1 className={classes.logo}>SCISSOR</h1>
          <div className={classes.dropdown}>
            <p className={classes.drop_btn}>
              {currentUser}
            </p>
              <div className="user_img">
                <img src="" />
              </div>
            <div className={classes.drop_content}>
              <button className={classes.button} onClick={handleLogout}>
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
