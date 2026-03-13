/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Home() {
  const [hasHydrated, setHasHydrated] = useState(false);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    setHasHydrated(true);
    // Simple logic: fetch completed practices from local storage
    // using purely native browser APIs for simplicity on hydration
    try {
      const history = JSON.parse(localStorage.getItem("forgive-history") || "[]");
      setLevel(Math.min(history.length, 5)); // cap at max visual level 5
    } catch {
      setLevel(0);
    }
  }, []);

  if (!hasHydrated) return <div className="min-h-screen animate-pulse bg-[var(--background)]"></div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-light text-[var(--foreground)] tracking-tight">
          Hello again.
        </h1>
        <p className="text-sm text-[var(--nav-inactive)] max-w-[250px] mx-auto leading-relaxed">
          This is your safe place to let go of sad thoughts. Everything you write stays secret here.
        </p>
      </motion.div>

      {/* Visual Tracker: A simple growing circle/heart representing capacity to forgive */}
      <motion.div
        className="relative flex items-center justify-center w-64 h-64 mx-auto mt-12 mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className="absolute inset-0 bg-[var(--primary)]/10 rounded-full animate-pulse blur-2xl" />

        {/* Layered circles depending on "level" */}
        <motion.div
          className="absolute inset-0 border border-[var(--primary)]/20 rounded-full"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative flex items-center justify-center bg-gradient-to-tr from-[var(--primary)] to-[var(--primary-dark)] rounded-full shadow-lg"
          animate={{
            width: 80 + (level * 20),
            height: 80 + (level * 20)
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <Heart
            className="text-white drop-shadow-md"
            size={32 + (level * 4)}
            fill="currentColor"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <button
          onClick={() => window.location.href = '/practice'}
          className="px-8 py-3 bg-white text-[var(--primary-dark)] text-sm font-medium rounded-2xl shadow-sm border border-[var(--accent)] hover:shadow-md hover:bg-[var(--accent)]/10"
        >
          Let's Practice
        </button>
      </motion.div>
    </div>
  );
}
