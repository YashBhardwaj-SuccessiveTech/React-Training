"use client";

import React from "react";

export default function UserProfile({ name, email, phone }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
}
