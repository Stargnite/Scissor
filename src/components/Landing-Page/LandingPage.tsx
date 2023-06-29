import * as React from 'react';
import Logo from '../../assets/logo.svg'
import classes from "./LandingPage.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight, FaBars } from "react-icons/fa";
import ViewPort2 from "./ViewPort2";
import FAQ from "./FAQ-section/FAQ";
import Footer from "./footer/Footer";
import { useContext, useState } from "react";
import {AuthContext} from "../../store/auth-context";
import Pricing from "./Pricing/Pricing";
import {GrClose} from 'react-icons/gr'


const  LandingPage: React.FC = () => {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (authCtx.token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={classes.background_design}>
        <div className={classes.floor}></div>
        <div className={classes.oval}></div>
        <div className={classes.bg_vector}></div>
        <div className={classes.bg_vector2}></div>
        <div className={classes.bg_vector3}></div>
      </div>
      <div className={classes.home_first_vp}>
        <nav>
          <div
            className={`${classes.navbar} ${
              sidebarOpen ? classes.sidebarOpen : ""
            }`}
          >
            <div className={classes.logo}>
              <NavLink to="/">{!sidebarOpen && <img src={Logo} alt='Logo' className={classes.logo} />}</NavLink>
            </div>
            <ul className={classes.nav_links}>
              <li>
                <NavLink to="/" className={classes.navLink}>
                  My URLs
                </NavLink>
              </li>
              <li>
                <NavLink to="/features" className={classes.navLink}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className={classes.navLink}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={classes.navLink}>
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink to="/faqs" className={classes.navLink}>
                  FAQs
                </NavLink>
              </li>

              <div className={classes.access_btns_small}>
                <Link to="/login" className={classes.log_in}>
                  Log in
                </Link>
                <Link to="/signup" className={classes.try_for_free}>
                  Try for free
                </Link>
              </div>
            </ul>

            <div className={classes.access_btns}>
              <Link to="/login" className={classes.log_in}>
                Log in
              </Link>
              <Link to="/signup" className={classes.try_for_free}>
                Try for free
              </Link>
            </div>
            <div className={classes.toggle_btn} onClick={handleToggleSidebar}>
               {sidebarOpen ? <GrClose /> : <FaBars />}
            </div>
          </div>
        </nav>

        <div className={classes.LP_content}>
          <div className={classes.home_text}>
            <h1>
              {" "}
              Optimize Your Online Experience with Our Advanced{" "}
              <span className={classes.intro_highlight}>
                URL Shortening
              </span>{" "}
              Solution
            </h1>
            <p>
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance user
              engagement.
            </p>

            <div className={classes.home_vp_links}>   
            <Link to="/signup" className={classes.sign_up}>
              Sign Up
            </Link>
            <a href="" className={classes.learn_more}>
              Learn more
            </a>
            </div>
          </div>
        </div>
        <div className={classes.link_ad}>
          <div className={classes.link_img}>
            <div className={classes.left}></div>
            <div className={classes.center}></div>
            <div className={classes.right}></div>
          </div>
          <div className={classes.arrow}>
            <FaArrowRight className={classes.arrow_icon} />
          </div>
          <div className={classes.link_text}>
            <p>
              Seamlessly transform your long URLs into concise and shareable
              links with just few clicks.
            </p>
          </div>
        </div>
      </div>
      <ViewPort2 />
      <Pricing />
      <div className={classes.get_started}>
        <h1>Revolutionizing Link Optimization</h1>
        <button onClick={handleGetStarted}>Get Started</button>
      </div>
      <FAQ />
      <Footer />
      <div className={classes.year_created}>
        <p>Terms of Service | Security | 2023 Scissor </p>
      </div>
    </>
  );
}

export default LandingPage;