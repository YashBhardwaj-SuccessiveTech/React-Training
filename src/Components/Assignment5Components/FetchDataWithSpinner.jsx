// Components/Assignment5Components/FetchDataWithSpinner.jsx
"use client";

import { useEffect, useState } from "react";

export default function Spinner() {
  const [userData, setUserData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    setHasError(false);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); // fetch on component mount
  }, []);

  return (
    <main style={{ padding: 30 }}>
      <h1>Users</h1>

      {loading && (
        <div style={{ margin: "20px 0" }}>
          <span style={{ fontSize: 20 }}>⏳ Loading...</span>
        </div>
      )}

      {!loading && hasError && (
        <>
          <p style={{ color: "red" }}>Error fetching users. Please try again.</p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      )}

      {!loading && !hasError && (
        <ul>
          {userData.map((user) => (
            <li key={user.id} style={{ marginBottom: 10 }}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
