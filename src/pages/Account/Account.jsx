import "./Account.css";

const Account = () => {
  return (
    <div className="account">
      <div className="row">
        <h1>Edit Account</h1>
        <p>*Required Fields</p>
      </div>
      <div className="input-div">
        <label htmlFor="email">Email</label>
        <strong>sikander.aaa@gmail.com</strong>
      </div>
      <div className="input-div">
        <label htmlFor="f-name">First Name*</label>
        <input type="text" id="f-name" />
      </div>
      <div className="input-div">
        <label htmlFor="l-name">Last Name*</label>
        <input type="text" id="f-name" />
      </div>
      <div className="input-div">
        <label htmlFor="n-name">Nickname</label>
        <input type="text" id="f-name" />
      </div>
      <div className="btn-div">
        <button className="aqua-btn">Save</button>
        <button className="aqua-btn inverse">Cancel</button>
      </div>
    </div>
  );
};

export default Account;
