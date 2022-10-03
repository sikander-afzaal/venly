import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWallet, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import MasterPinModal from "../../components/MasterPinModal/MasterPinModal";

export default function Blockchain({ setSelectedBlockChain, blockchain }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && <MasterPinModal setOpenModal={setOpenModal} />}
      <div
        className={`home__blockchainSelected ${
          blockchain ? "show-blockchain" : ""
        }`}
      >
        <div>{blockchain}</div>

        <button
          onClick={() => setOpenModal(true)}
          className="home__createWallet"
        >
          <FontAwesomeIcon icon={faWallet} /> Create New Wallet
        </button>

        <button className="home__importWallet">
          {" "}
          <FontAwesomeIcon icon={faWallet} />
          Import Wallet
        </button>

        <button
          className="home__back"
          onClick={() => setSelectedBlockChain("")}
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Back
        </button>
      </div>
    </>
  );
}
