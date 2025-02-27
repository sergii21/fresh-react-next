// "use client";

// import React, { useState } from "react";
// import { auth, provider, signInWithPopup } from "../../../firebase";

// const GoogleSignUp = () => {
//   const [user, setUser] = useState(null);

//   const handleSignUp = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log("User Info:", result.user);
//       setUser(result.user); // Save user data in state
//     } catch (error) {
//       console.error("Error signing in:", error);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       {user ? (
//         <div>
//           <h2>Welcome, {user.displayName}!</h2>
//         </div>
//       ) : (
//         <button
//           onClick={handleSignUp}
//           style={{ padding: "10px", fontSize: "16px" }}
//         >
//           Sign Up with Google
//         </button>
//       )}
//     </div>
//   );
// };

// export default GoogleSignUp;
