import "./cash-app.css";
const CashApp = () => {
  return (
    <div className="cash-app">
      <div className="hero-section">
        <div className="eye-button">
          <img className="layer-1-icon" alt="" src="/layer-1.svg" />
        </div>
        <div className="menu">
          <button className="sign-in">Sign In</button>
          <button className="sign-in">Legal</button>
          <button className="sign-in">Licenses</button>
          <button className="sign-in">Security</button>
          <button className="sign-in">Careers</button>
          <button className="sign-in">Press</button>
          <button className="sign-in">Support</button>
          <button className="sign-in">Status</button>
          <button className="sign-in">Codeblog</button>
        </div>
        <img className="cashapp-logo" alt="" src="/cashapp--logo.svg" />
        <div className="rays">
          <div className="hero">
            <div className="vector-wrapper">
              <img className="vector-icon" alt="" src="/vector.svg" />
            </div>
            <div className="cash">CASh</div>
            <img
              className="intro-phone-1-icon"
              alt=""
              src="/introphone-1@2x.png"
            />
            <div className="app">
              <span className="app-txt">
                <p className="blank-line">&nbsp;</p>
                <p className="blank-line">APP</p>
              </span>
            </div>
            <img
              className="intro-cube-1-icon"
              alt=""
              src="/introcube-1@2x.png"
            />
            <img
              className="intro-cubes-1-icon"
              alt=""
              src="/introcubes-1@2x.png"
            />
            <img
              className="intro-pillar-1-icon"
              alt=""
              src="/intropillar-1@2x.png"
            />
            <img
              className="intro-stairs-1-icon"
              alt=""
              src="/introstairs-1@2x.png"
            />
          </div>
        </div>
        <div className="fixed-footer">
          <div className="download-icons">
            <div className="buttons">
              <button className="app-store">
                <img className="vector-icon1" alt="" src="/vector1.svg" />
                <label className="label">APP STORE</label>
              </button>
              <button className="google-play">
                <img className="vector-icon2" alt="" src="/vector2.svg" />
                <label className="label">GOOGLE PLAY</label>
              </button>
            </div>
          </div>
          <div className="policy-text">
            <div className="brokerage-services-by-container">
              <p className="blank-line">
                Brokerage services by Cash App Investing LLC, member FINRA /
                SIPC.
              </p>
              <p className="blank-line">
                See our BrokerCheck. Investing involves risk; you may lose
                money. Bitcoin trading offered by Cash App. Cash App Investing
                does not trade bitcoin and Cash App is not a member of FINRA or
                SIPC. Cash App facilitates banking services through Sutton Bank
                and Lincoln Savings Bank, Members FDIC.
              </p>
            </div>
          </div>
          <button className="buttons1">
            <button className="frame">
              <img className="vector-icon3" alt="" src="/vector3.svg" />
            </button>
            <button className="frame1">
              <img className="vector-icon4" alt="" src="/vector4.svg" />
            </button>
            <button className="frame2">
              <img className="vector-icon5" alt="" src="/vector5.svg" />
              <img className="vector-icon6" alt="" src="/vector6.svg" />
              <img className="vector-icon7" alt="" src="/vector7.svg" />
            </button>
          </button>
          <img className="vector-icon8" alt="" src="/vector8.svg" />
        </div>
      </div>
    </div>
  );
};

export default CashApp;
