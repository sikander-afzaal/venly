import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faPaste, faCopy } from "@fortawesome/free-regular-svg-icons";

import {
  faChevronLeft,
  faArrowRightArrowLeft,
  faRotate,
  faHorse,
  faCoins,
  faChartLine,
  faGrip,
  faPlusCircle,
  faPlus,
  faUpload,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

import { NavLink, Outlet, useNavigate } from "react-router-dom";

import "./Inventory.css";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import Wallet from "../../components/Wallet/Wallet";

export default function Inventory() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="inventory">
      <div className="header__wrapper">
        <div className="inventory__header">
          <div className="inventory__headerLeft">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="inventory__headerBack"
              onClick={() => navigate(-1)}
            />

            <img src="/assets/logo-gif.gif" alt="logo" />
          </div>

          <div
            className="inventory__user"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faUser} />

            <ProfileDropdown isActive={showDropdown} />
          </div>
        </div>
      </div>
      <div className="inventory-bottom">
        <div className="coin-header">
          <p className="active-coin">
            <FontAwesomeIcon icon={faEthereum} /> Ethereum
          </p>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <div className="dashboard-wrap">
          <div className="wallets">
            <Wallet />
            <div className="row">
              <FontAwesomeIcon icon={faPlus} />
              <FontAwesomeIcon icon={faUpload} />
            </div>
          </div>
          <div className="main-dash">
            <h1>
              * Out of gas gibbon <FontAwesomeIcon icon={faPencil} />
            </h1>
            <div className="row">
              <div className="col">
                <div className="row">
                  <p>Balance</p>
                  <h3>
                    0.0000 <sup>ETH</sup> <a href="#">Buy ETH</a>{" "}
                  </h3>
                </div>
                <div className="row">
                  <p>Tokens</p>
                  <h4>No tokens found</h4>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <p>Address</p>
                  <h4>
                    0x981e64d36bF345Ec402E10A122250d243fEC78ec{" "}
                    <FontAwesomeIcon
                      style={{ cursor: "pointer" }}
                      icon={faCopy}
                    />
                  </h4>
                </div>
                <div className="row">
                  <p>Connected Apps</p>
                  <h4>No connected apps found</h4>
                </div>
              </div>
            </div>
            <div className="dash-links">
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active-dash-link" : "";
                }}
                to={"/inventory/"}
              >
                <FontAwesomeIcon icon={faHorse} /> NFT
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active-dash-link" : "";
                }}
                to={"/inventory/token"}
              >
                <FontAwesomeIcon icon={faCoins} /> Tokens
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active-dash-link" : "";
                }}
                to={"/inventory/transaction"}
              >
                <FontAwesomeIcon icon={faArrowRightArrowLeft} /> Transaction
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active-dash-link" : "";
                }}
                to={"/inventory/swap"}
              >
                <FontAwesomeIcon icon={faRotate} /> Swap
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active-dash-link" : "";
                }}
                to={"/inventory/activity"}
              >
                <FontAwesomeIcon icon={faChartLine} /> Activity
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "active-dash-link" : "";
                }}
                to={"/inventory/app"}
              >
                <FontAwesomeIcon icon={faGrip} /> Apps
              </NavLink>
            </div>
            <div className="dash-comps">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
