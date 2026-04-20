import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const LanguageSwitcher = ({ className = "" }) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("pt") ? "en" : "pt";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  const isDark = i18n.language.startsWith("en");

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`relative flex items-center justify-between w-14 h-7 p-1 rounded-full bg-surface border border-border cursor-pointer transition-colors hover:border-border-accent ${className}`}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
      style={{ background: "rgba(255, 255, 255, 0.05)" }} // Fallback for bio page lacking Tailwind
    >
      <span className="text-[10px] z-10 w-1/2 text-center" style={{ color: isDark ? "#fff" : "rgba(255, 255, 255, 0.5)"}}>EN</span>
      <span className="text-[10px] z-10 w-1/2 text-center" style={{ color: !isDark ? "#fff" : "rgba(255, 255, 255, 0.5)"}}>PT</span>
      
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-accent z-0"
        style={{ background: "#f2572b" }}
        animate={{
          left: isDark ? "2px" : "calc(50% + 2px)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );
};
