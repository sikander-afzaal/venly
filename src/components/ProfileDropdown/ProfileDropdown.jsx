import React from "react";
import { Link } from "react-router-dom";

import "./ProfileDropdown.css";

export default function ProfileDropdown({ isActive }) {
  return (
    <div
      className={`profileDropdown ${
        isActive ? "profileDropdown__isActive" : ""
      }`}
    >
      <Link to="/settings/">Settings</Link>
      <span>Login</span>
      <Link to="/">Sign up</Link>
    </div>
  );
}
