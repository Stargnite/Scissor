import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./footer.css";
import Logo from '../../../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className="media-links">
        <div className="logo"><img src={Logo} /></div>
        <div className="media-links-icons">
          <a href="">
            <FaTwitter className="footer-icon" />
          </a>
          <a href="">
            <FaInstagram className="footer-icon-insta" />
          </a>
          <a href="">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="">
            <FaFacebook className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="media-links-lists">
        <div className="links-cont">
          <h1>Why Scissor</h1>
          <div className="links">
            <a href="#">Scissor 101</a>
            <a href="#">Integration & APIs</a>
            <a href="#">Pricing</a>
          </div>
        </div>
        <div className="links-cont">
          <h1>Solutions</h1>
          <div className="links">
            <a href="#">Social Media</a>
            <a href="#">Digital Marketing</a>
            <a href="#">Customers Service</a>
			<a href="#">For Developers</a>
          </div>
        </div>
        <div className="links-cont">
          <h1>Products</h1>
          <div className="links">
            <a href="#">Link Managment</a>
            <a href="#">QR Codes</a>
            <a href="#">Link-in-bio</a>
          </div>
        </div>
        <div className="links-cont">
          <h1>Company</h1>
          <div className="links">
            <a href="#">About Scissors</a>
            <a href="#">Careers</a>
            <a href="#">Partners</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
            <a href="#">Reviews</a>
          </div>
        </div>
        <div className="links-cont">
          <h1>Resources</h1>
          <div className="links">
            <a href="#">Blog</a>
            <a href="#">Resource Library</a>
            <a href="#">Developers</a>
            <a href="#">App Connectors</a>
            <a href="#">Support</a>
            <a href="#">Trust Center</a>
            <a href="#">Browser Extension</a>
            <a href="#">Mobile App</a>
          </div>
        </div>
        <div className="links-cont">
          <h1>Features</h1>
          <div className="links">
            <a href="#">Brand Links</a>
            <a href="#">Mobile Links</a>
            <a href="#">Campaign</a>
            <a href="#">Management and analytics</a>
            <a href="#">QR Code generation</a>
          </div>
        </div>
        <div className="links-cont">
          <h1>Legal</h1>
          <div className="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Acceptable Use Policy</a>
            <a href="#">Coder Of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
