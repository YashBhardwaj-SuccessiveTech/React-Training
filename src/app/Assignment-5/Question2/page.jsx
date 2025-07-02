// 2. Extend your Next.js component that fetches data from a public API ( https ://jsonplaceholder.typicode.com/users) 
// using server-side rendering (SSR) with the App Router to handle errors gracefully.
//  If the fetch request fails during SSR, display a user-friendly error message on the page. 
// Additionally, provide a retry button so users can attempt to fetch the data again without reloading the entire page.

"use client";
import { useState } from "react";

export default function RetryUsers({ users = [], error = false }) {
  const [userData, setUserData] = useState(users);
  const [hasError, setHasError] = useState(error);
  const [loading, setLoading] = useState(false);

  const retryFetch = async () => {
    setLoading(true);
    setHasError(false);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed again");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: 30 }}>
      <h1> Users</h1>

      {loading && <p>Loading...</p>}

      {hasError ? (
        <>
          <p style={{ color: "red" }}> Error fetching users. Please try again.</p>
          <button onClick={retryFetch}>Retry</button>
        </>
      ) : (
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