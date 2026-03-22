"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/public/logowhite.png";
import { useLoader } from "@/app/context/LoaderContext";

export default function Loader() {
  const { setIsLoaded } = useLoader();
  const [showLoader, setShowLoader] = useState(true); 
  const [isExiting, setIsExiting] = useState(false);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("portfolio-loaded")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowLoader(false);
      setIsLoaded(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // maneja la primera visita (timer + out animation)
  useEffect(() => {
    if (sessionStorage.getItem("portfolio-loaded")) return; 

    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      sessionStorage.setItem("portfolio-loaded", "true");
      setTimeout(() => setIsLoaded(true), 500);
    }, 2000);

    return () => {
      clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!isExiting) return;
    const hideTimer = setTimeout(() => {
      setShowLoader(false);
      document.body.style.overflow = "";
    }, 600);
    return () => clearTimeout(hideTimer);
  }, [isExiting]);

  if (!showLoader) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center bg-[#0e0e10]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image src={logo} alt="Logo" width={80} height={80} priority loading="eager" />
            </motion.div>

            <div className="relative w-48 h-0.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-purple-500 rounded-full"
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