"use client";
import { useEffect, useState } from "react";
import AnimationHeader from "./animation_header";
import Login from "@/components/Login/page";
import FullscreenVideoSection from "@/components/VideoBanner"; // Import your video section
import { config } from "../../config";

export default function ClientWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(true);
  const [data, setData] = useState(null);

  // Hide the fullscreen video after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullscreenVideo(false);
    }, 7000); // 7 seconds
    return () => clearTimeout(timer);
  }, []);

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetch(`${config.APP_URL}/secure-plugin/v1/home`, { cache: "no-store" })
        .then((res) => {
          if (!res.ok) throw new Error(`Status ${res.status}`);
          return res.json();
        })
        .then((result) => setData(result))
        .catch((err) => console.error("Error fetching home data:", err));
    }
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem("token", "true");
    window.location.reload();
  };

  // Step 1: Show Fullscreen video first
  if (showFullscreenVideo) {
    return <FullscreenVideoSection />;
  }

  // Step 2: Show login if not logged in
  if (!isLoggedIn) {
    return <Login onSuccess={handleLoginSuccess} />;
  }

  // Step 3: Show main content
  return (
    <>
      <AnimationHeader />
      {typeof children === "function" ? children(data) : children}
    </>
  );
}
