// 14. Create a higher-order component (HOC) named withAuth that restricts access to a component 
// only to authenticated users.
//  Implement this HOC on a sample component and demonstrate how it protects routes or pages 
// in a Next.js application.
"use client"
import ProtectedComponent from "@/Components/ProtectedPage";
import withAuth from "./withAuth";

const ProtectedPage = withAuth(ProtectedComponent);

export default function Page() {
  return <ProtectedPage />;
}

