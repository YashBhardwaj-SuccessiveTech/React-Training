'use client';

import withAuth from "./withAuth";


function ProtectedPage() {
  
  
  return (
    <div style={{ padding: 40 }}>
      <h1>Protected Page</h1>
      <p>This content is visible only if loggin</p>
    </div>
  );
}

export default withAuth(ProtectedPage);