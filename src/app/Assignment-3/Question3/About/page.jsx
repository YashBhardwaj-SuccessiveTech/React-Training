// 3.creat pages: Home and About.
// Implement file routing.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push('/Assignment-3/Login');
  }, [router]);

  return (
    <main style={{ padding: 30 }}>
      <h1>Protected About Page</h1>
      <p>Only visible if you are logged in.</p>
    </main>
  );
}  

