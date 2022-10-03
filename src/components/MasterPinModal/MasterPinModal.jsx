import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MasterPinModal.css";

const MasterPinModal = ({ setOpenModal }) => {
  const navigate = useNavigate();
  const [confirmPin, setConfirmPin] = useState("");
  const [pin, setPin] = useState("");
  return (
    <>
      <div className="overlay" onClick={() => setOpenModal(false)}></div>
      <div className="master-modal">
        <FontAwesomeIcon icon={faXmark} onClick={() => setOpenModal(false)} />
        <h2>Enter Pin</h2>
        <div className="masterpin__input">
          <span>Enter Master Pin</span>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <div className="masterpin__input">
          <span>Confirm Master Pin</span>
          <input
            type="password"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
          />
        </div>
        <button onClick={() => navigate("/inventory/")} className="aqua-btn">
          Confirm
        </button>
      </div>
    </>
  );
};

export default MasterPinModal;
