// "use client";

// import { Authcontext, AuthProvider } from "@/context/Authcontext";
// import { redirect } from "next/navigation";

// const withAuth = (WrappedComponent) => (props) => {
//   const {loggedIn}=AuthProvider();
  

//   if (!loggedIn) {
//     redirect("/login");
//   }

//   return <WrappedComponent {...props} />;
// };

// export default withAuth;