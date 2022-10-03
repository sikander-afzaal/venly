import "./TwoFactor.css";

const TwoFactor = () => {
  return (
    <div className="two-factor">
      <h1>Two-Factor Authentication</h1>
      <ol>
        <li>
          Install an authenticator app on your mobile <br /> e.g. Google
          Authenticator, FreeOTP or any other app that supports 6 digit OTPs
        </li>
        <li>Open the app and scan the barcode</li>

        <div className="qr">
          <img src="/assets/qr.png" alt="" />
          <a href="#">Unable to scan?</a>
        </div>

        <li>
          <div>
            <p>
              Enter the one-time code provided by the app and click Save to
              finish the setup.
            </p>
            <div className="input-div">
              <label htmlFor="otp">One-time code</label>
              <input type="text" id="otp" />
            </div>
            <div className="btn-div">
              <button className="aqua-btn">Save</button>
              <button className="aqua-btn inverse">Cancel</button>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TwoFactor;
