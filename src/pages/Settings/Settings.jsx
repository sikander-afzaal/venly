import "./Settings.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronLeft,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ProfileDropdown from "../../components/ProfileDropdown/ProfileDropdown";

export default function Settings() {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="inventory">
      <div
        onClick={() => setSidebar(false)}
        className={`set-overlay ${sidebar ? "open-overlay" : ""}`}
      ></div>
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
      <div className="bottom-settings">
        <FontAwesomeIcon
          onClick={() => setSidebar(true)}
          icon={faBars}
          className="mob-icon"
        />
        <div className={`left-settings ${sidebar ? "left-settings-open" : ""}`}>
          {" "}
          <FontAwesomeIcon
            onClick={() => setSidebar(false)}
            icon={faXmark}
            className="mob-icon"
          />
          <NavLink
            onClick={() => setSidebar(false)}
            className={({ isActive }) => {
              return isActive ? "active-settings-link" : "";
            }}
            to={"/settings/"}
          >
            Account
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            className={({ isActive }) => {
              return isActive ? "active-settings-link" : "";
            }}
            to={"/settings/password"}
          >
            Password
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            className={({ isActive }) => {
              return isActive ? "active-settings-link" : "";
            }}
            to={"/settings/two-factor"}
          >
            Two-factor Authentication
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            className={({ isActive }) => {
              return isActive ? "active-settings-link" : "";
            }}
            to={"/settings/social"}
          >
            Social Logins
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            className={({ isActive }) => {
              return isActive ? "active-settings-link" : "";
            }}
            to={"/settings/session"}
          >
            Sessions
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            className={({ isActive }) => {
              return isActive ? "active-settings-link" : "";
            }}
            to={"/settings/application"}
          >
            Applications
          </NavLink>
          <NavLink
            onClick={() => setSidebar(false)}
            className={({ isActive }) => {
              return isActive ? "active-settings-link" : "";
            }}
            to={"/settings/log"}
          >
            Log
          </NavLink>
        </div>
        <div className="right-settings">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
