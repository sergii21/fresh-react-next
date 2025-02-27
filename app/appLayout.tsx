"use client";

import { auth, provider } from "@/firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AppLayout({ children }: React.PropsWithChildren) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check user authentication state on app load
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const handleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  console.log({ user });

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {user ? (
          <div>
            <h2>Welcome, {user.displayName}!</h2>
            <Image
              width={500}
              height={500}
              src={user.photoURL}
              alt="User Profile"
              style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            />
            <p>Email: {user.email}</p>
            <button
              onClick={handleLogout}
              style={{ padding: "10px", marginTop: "10px" }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleSignUp}
            style={{ padding: "10px", fontSize: "16px" }}
          >
            Sign Up with Google
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
