import "./viewport2.css";
import url_shortening from './../../assets/shortening_img.png'
import custom_url from './../../assets/custom_url_img.png'
import qr_code from './../../assets/QR_code_img.png'
import analytics from './../../assets/analytics_img.png'


const ViewPort2 = () => {
  return (
    <div className="v2-content">
      <div className="content1">
        <h1 className="header">
          <span>One Stop</span>.<br /> Four Possibilities.
        </h1>
        <div className="content1-numbers">
          <div className="analytics">
            <h1>3M</h1>
            <p>Active users</p>
          </div>
          <div className="analytics">
            <h1>60M</h1>
            <p>Links & QR codes created</p>
          </div>
          <div className="analytics">
            <h1>1B</h1>
            <p>Clicked & scanned connections</p>
          </div>
          <div className="analytics">
            <h1>300k</h1>
            <p>App integrations</p>
          </div>
        </div>
      </div>
      <div className="content2">
        <div className="features">
          <img src={url_shortening} alt="url_shortening" className="" />
          <h1>URL Shortening</h1>
          <p>
            Scissor allows you to shorten URLs of your business, events. Shorten
            your URL at scale, URL redirects.
          </p>
        </div>
        <div className="features">
          <img src={custom_url} alt="custom_url" />
          <h1>Custom URLs</h1>
          <p>
            With Scissor, you can create custom URLs, with the length you
            want!.A solution for socials and businesses.
          </p>
        </div>
        <div className="features">
        <img src={qr_code} alt="custom_url" />

          <h1>QR codes</h1>
          <p>
            Generate QR codes to your business, events. Bring your audience and
            customers to your doorstep with this scan and go solution.
          </p>
        </div>
        <div className="features">
        <img src={analytics} alt="custom_url" />

          <h1>Data Analytics</h1>
          <p>
            Receive data on the usage of either your shortened URL, custom URLs
            or generated QR codes. Embedded to monitor progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewPort2;
