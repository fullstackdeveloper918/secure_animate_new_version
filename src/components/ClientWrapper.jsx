"use client";
import { useEffect, useState } from "react";
import PreLoader from "@/components/preLoader";
import AnimationHeader from "./animation_header";
import Login from "@/components/Login/page";
import FullscreenVideoSection from "@/components/VideoBanner"; // Import your video section
import { config } from "../../config";

export default function ClientWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [showFullscreenVideo, setShowFullscreenVideo] = useState(false);
  const [data, setData] = useState(null);

  // Step 1: Show PreLoader
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPreloader(false); // End PreLoader after 7s
      setShowFullscreenVideo(true); // Start video section
    }, 7000);
    return () => clearTimeout(timeout);
  }, []);

  // Step 2: Auto-hide video after 10s
  useEffect(() => {
    if (showFullscreenVideo) {
      const timer = setTimeout(() => {
        setShowFullscreenVideo(false); // Hide video after 10s
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [showFullscreenVideo]);

  // Step 3: Check login and fetch data
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

  // Handle login
  const handleLoginSuccess = () => {
    localStorage.setItem("token", "true");
    window.location.reload();
  };

  // Return the correct section based on state
  if (showPreloader) {
    return <PreLoader onComplete={() => setShowPreloader(false)} />;
  }

  // if (showFullscreenVideo) {
  //   return <FullscreenVideoSection />;
  // }

  if (!isLoggedIn) {
    return <Login onSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      {isLoggedIn && <AnimationHeader />}
      {typeof children === "function" ? children(data) : children}
    </>
  );
}
