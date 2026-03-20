"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/public/logowhite.png";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if loader has already been shown this session
    const hasLoadedBefore = sessionStorage.getItem("portfolio-loaded");
    
    if (hasLoadedBefore) {
      setIsLoading(false);
      setShowLoader(false);
      return;
    }

    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("portfolio-loaded", "true");
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // Remove loader from DOM after exit animation
  useEffect(() => {
    if (!isLoading) {
      const hideTimer = setTimeout(() => {
        setShowLoader(false);
        document.body.style.overflow = "";
      }, 600); // Match exit animation duration
      return () => clearTimeout(hideTimer);
    }
  }, [isLoading]);

  if (!showLoader) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0e0e10]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                priority
                loading="eager"
              />
            </motion.div>

            {/* Progress bar */}
            <div className="relative w-48 h-0.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
