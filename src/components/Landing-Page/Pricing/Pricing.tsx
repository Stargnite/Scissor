import "./pricing.css";
import { FiCheckCircle } from 'react-icons/fi'

const Pricing = () => {
  return (
    <div className="prices_cont">
      <div className="pricing_header">
        <h1>
          A <span>price perfect</span> for your needs.
        </h1>
        <p>
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
      <div className="price_plans">
        <div className="basic_plan">
          <div className="plan_name">Basic</div>
          <h2 className="plan_price">Free</h2>
          <div className="plan_desc">Free for all users</div>
          <div className="plan_features_list">
            <div className="plan_feature">
				<FiCheckCircle  className="check_icon"/>
				<p>Unlimited URL Shortening</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/> 
              <p>Basic Link Analytics</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Customizable Short Links</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Standard Support</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Ad-supported</p>
            </div>
          </div>
        </div>

        <div className="prof_plan">
          <div className="plan_name">Professional</div>
          <h2 className="plan_price">$15/month</h2>
          <div className="plan_desc">Ideal for business creators</div>
          <div className="plan_features_list">
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Enhanced Link Analytics</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Custom Branded Domains</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Advance Links Customization</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Priority Support</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Ad-free Experience</p>
            </div>
          </div>
        </div>

        <div className="teams_plan">
          <div className="plan_name">Teams</div>
          <h2 className="plan_price">$25/month</h2>
          <div className="plan_desc">Share with up to 10 users</div>
          <div className="plan_features_list">
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Team Collaboration</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>User Roles And Permission</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Enhanced Security</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>API Access</p>
            </div>
            <div className="plan_feature">
			<FiCheckCircle  className="check_icon"/>
              <p>Dedicated Account Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div className="select_pricing">
        <a href="#">
          <button className="custom_pricing_btn">Get Custom Pricing</button>
        </a>
        <a href="#">
          <button className="select_pricing_btn">Select Pricing</button>
        </a>
      </div>
    </div>
  );
};

export default Pricing;
