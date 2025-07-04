"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }, [router]);

    if (isAuthenticated === null) {
      return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
      return <p>You must be logged in to view this page.</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
