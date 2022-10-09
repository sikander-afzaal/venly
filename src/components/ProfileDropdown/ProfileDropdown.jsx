import React from "react";

import "./ProfileDropdown.css";

export default function ProfileDropdown({ isActive }) {
  return (
    <div
      className={`profileDropdown ${
        isActive ? "profileDropdown__isActive" : ""
      }`}
    >
      <span>Settings</span>
      <span>Login</span>
      <span>Signin</span>
    </div>
  );
}
