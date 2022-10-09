import React, { useState } from "react";

import Footer from "../../components/Footer/Footer";

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
  faGear,
  faPencil,
  faUpload,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Wallet from "../../components/Wallet/Wallet";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import "./Inventory.css";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";

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

      <div className="inventory__topWrapper">
        <div className="inventory__top">
          <div className="inventory__topUp">
            <h1>Adamant Duck</h1>

            <span>0.00000 ETH</span>
          </div>

          <div className="inventory__topDown">
            <span className="inventory__id">
              0xbcABf8779720084dB123... <FontAwesomeIcon icon={faPaste} />
            </span>

            <span className="inventory__buy">Buy ETH</span>
          </div>
        </div>
      </div>

      <div className="inventory__centerWrapper">
        <div className="inventory__center">
          <div className="inventory__centerLeft">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "inventory__selected" : "";
              }}
              to={"/inventory/"}
            >
              <FontAwesomeIcon icon={faHorse} />
              <span>NFT</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "inventory__selected" : "";
              }}
              to={"/inventory/token"}
            >
              <FontAwesomeIcon icon={faCoins} />
              <span>Tokens</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "inventory__selected" : "";
              }}
              to={"/inventory/transaction"}
            >
              <FontAwesomeIcon icon={faArrowRightArrowLeft} />
              <span>Transactions</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "inventory__selected" : "";
              }}
              to={"/inventory/swap"}
            >
              <FontAwesomeIcon icon={faRotate} />
              <span>Swap</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "inventory__selected" : "";
              }}
              to={"/inventory/activity"}
            >
              <FontAwesomeIcon icon={faChartLine} />
              <span>Activity</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "inventory__selected" : "";
              }}
              to={"/inventory/app"}
            >
              <FontAwesomeIcon icon={faGrip} />
              <span>App</span>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? "inventory__selected" : "";
              }}
              to={"/inventory/settings/"}
            >
              <FontAwesomeIcon icon={faGear} />
              <span>Settings</span>
            </NavLink>
          </div>

          <div className="inventory__centerRight">
            <div className="dashboard-wrap">
              {/* <div className="wallets">
                <Wallet />
                <div className="row">
                  <FontAwesomeIcon icon={faPlus} />
                  <FontAwesomeIcon icon={faUpload} />
                </div>
              </div> */}
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
                <hr style={{ width: "100%", margin: "10px 0px" }} />
                <div className="dash-comps">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inventory__footerWrapper">
        <div className="inventory__footer">
          <NavLink
            className={({ isActive }) => {
              return isActive ? "inventory__selected" : "";
            }}
            to={"/inventory/"}
          >
            <FontAwesomeIcon icon={faHorse} />
            <span>NFT</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "inventory__selected" : "";
            }}
            to={"/inventory/token"}
          >
            <FontAwesomeIcon icon={faCoins} />
            <span>Tokens</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "inventory__selected" : "";
            }}
            to={"/inventory/transaction"}
          >
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <span>Transactions</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "inventory__selected" : "";
            }}
            to={"/inventory/swap"}
          >
            <FontAwesomeIcon icon={faRotate} />
            <span>Swap</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "inventory__selected" : "";
            }}
            to={"/inventory/activity"}
          >
            <FontAwesomeIcon icon={faChartLine} />
            <span>Activity</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "inventory__selected" : "";
            }}
            to={"/inventory/app"}
          >
            <FontAwesomeIcon icon={faGrip} />
            <span>App</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "inventory__selected" : "";
            }}
            to={"/inventory/settings/"}
          >
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
}
