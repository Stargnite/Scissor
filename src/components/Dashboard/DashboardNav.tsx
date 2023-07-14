import classes from "./dashboardNav.module.css";
import Logo from '../../assets/logo.svg'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-context.jsx";
// import useAuth from "../Authentication/UseAuth";
import { signOut } from "firebase/auth";
import { auth } from "../Authentication/Firebase/firebase.ts";
// import { db } from "../Authentication/Firebase/firebase.ts";
import { MdKeyboardArrowDown } from 'react-icons/md'
import noProfile from './../../assets/no-profile.svg'


const DashboardNav = () => {
  const authCtx = useContext(AuthContext);
  // let username = authCtx.username;
  const navigate = useNavigate();


  const currentUser = localStorage.getItem('username');
  // const currentUser = useAuth();
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
         <a href="/"><h1 className={classes.logo}><img src={Logo} /></h1></a>
          <div className={classes.dropdown}>
            <img src={noProfile} alt="profile_pic" className={classes.profile_pic} />
            <p className={classes.drop_btn}>
              {currentUser} <MdKeyboardArrowDown className="down_icon"/>
            </p>
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
