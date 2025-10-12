"use client";
import * as React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  showBrandText?: boolean;
  showSubText?: boolean;
  brandTextSize?: number;
  subTextSize?: number;
  className?: string;
  darkMode?: boolean;
}

const Logo = ({
  size = 45,
  showBrandText = true,
  showSubText = true,
  brandTextSize = 12,
  subTextSize = 7,
  className = "",
  darkMode,
}: LogoProps) => {
  const fondo_svg = darkMode ? "#0e5d88" : "white";
  const icon_color = darkMode ? "white" : "#0e5d88";
  const text_color = darkMode ? "white" : "#0e5d88";
  const subtext_color = darkMode ? "#f0b31d" : "#f0b31d";
  return (
    <div className={`inline-flex flex-col items-center   ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        style={{ width: size, height: size }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="250 100 524 500"
          className="w-full h-full"
        >
          <motion.path
            d="M410.5 160.6c-10.9 1.3-18.2 2.9-24.9 5.4-30.3 11.3-51.7 39.3-57.2 75.2-2.1 13.7-1.3 34.3 2.1 54.3 3.9 23.2 1.9 20.4 17.8 24.6 7.6 1.9 13.8 3.4 14 3.3.2-.2-.7-5.4-2-11.6-4.9-24.6-5.8-51.5-2.3-69.1 5-24.7 19.4-42.8 39.5-49.7 17.2-5.9 42.2-4.1 69 5 12.5 4.2 27.5 10.2 27.5 11 0 .9-18.4 6.7-28.4 8.9-4.8 1.1-9.3 2.4-9.8 2.9-1.5 1.5 5.6 5.9 13.2 8.3 13.9 4.3 34.2 3.4 51.5-2.3 5-1.7 19.1-8.1 31.5-14.3 35.2-17.6 49.8-21.2 69.2-17 8.3 1.7 12.6 3.6 20.4 9.1 10.5 7.4 17.3 18.1 21.5 34 3 11.4 3.7 34.3 1.4 53.4-1.4 12.3-5.4 35.8-7.1 41.1-.3 1.3-3.9 2.1-17.2 3.8-26.5 3.5-59 6.1-75.4 6.1H556v-15.4c0-14-.2-15.6-2.1-18-2-2.5-2.3-2.6-13.9-2.6-11.6 0-11.9.1-13.9 2.6-1.9 2.4-2.1 4-2.1 18.5V344h-22v-15.8c0-21.4-.3-21.7-19.4-21-14 .4-13.5-.4-13.6 20.6v16.4l-14.2-.6c-57.2-2.6-91-8.2-129-21.3-8.1-2.9-10-2.6-11.1 1.8-.9 3.4 3.7 7.3 15.7 13.5l11.4 5.9 3.3 10.5c15.3 50 28.9 85.8 44.9 118.5 18.8 38.6 31.9 53 48.1 52.9 11-.1 20.1-7 29.6-22.5 2.8-4.6 10.5-19.4 17.1-32.9 12.9-26.3 17-32.3 23.5-34.1 5.3-1.4 9.6.8 15.1 7.8 4.3 5.3 14.5 24.5 19 35.3 3.2 7.6 11.5 24 15 29.4 10.3 15.8 24.5 21.1 37.5 14.1 22.4-12.3 49.4-69 77.3-162.7l4.4-14.7 11.1-5.5c13-6.4 19.6-11.7 19.1-15.4-.6-4.6-2.6-4.7-13.2-.8-5.4 2.1-9.9 3.6-10.1 3.4-.1-.2 1-6.4 2.6-13.8 6.4-30.7 8.6-53.8 6.8-71.4-3.3-31.5-19.3-57.1-44-70.1-20.4-10.7-49.6-11.4-76.4-1.8-9.2 3.3-27.3 12.4-40.9 20.6l-10.9 6.6-7.1-4c-25.9-14.6-47.7-23.9-67.2-28.8-6.8-1.7-28.6-4.4-31.9-3.9-.5 0-2.3.3-4 .4z"
            fill="#0e5d88"
            initial={{ pathLength: 0, fill: "transparent" }}
            animate={{ pathLength: 1, fill: icon_color }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Parte inferior del diente original */}
          <motion.path
            d="M407 359c18 2.6 43.4 5 53.7 5h8.3v9c0 8.3.2 9.3 2.5 11.5 2.3 2.4 3 2.5 14 2.5s11.7-.1 14-2.5c2.3-2.2 2.5-3.2 2.5-11V365h22v8.5c0 7.9.2 8.8 2.5 11.1 2.5 2.5 2.9 2.6 14.1 2.2 14.8-.4 15.4-.9 15.4-13.8v-8.7l11.3-.7c24.2-1.5 73.4-7.8 82-10.6 2-.7 2.7-.6 2.7.5 0 5.1-21.8 70.4-32.2 96.5-17.6 44.3-28.6 59-39.9 53.6-5.7-2.7-9.1-8.9-25.8-47.1-10.1-23.2-19-34.9-30.4-40-7.3-3.3-14-3.9-21.1-2-13.2 3.5-22.2 15.2-35.2 46-5.5 13.1-14.7 31.3-18.8 37.4-1.7 2.6-4.3 4.9-6.4 5.8-14.6 6.1-28.9-18.8-53.4-92.2-7.7-23.4-17.8-56-17.8-57.9 0-.9 3.1-.6 11.3 1.1 6.1 1.3 17.3 3.2 24.7 4.3z"
            fill="#0e5d88"
            initial={{ pathLength: 0, fill: "transparent" }}
            animate={{ pathLength: 1, fill: fondo_svg }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Texto Go! Odontic */}
      {showBrandText && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <h1
            className="font-bold  leading-tight"
            style={{ fontSize: `${brandTextSize}px`, color: text_color }}
          >
            Go! Odontic
          </h1>
        </motion.div>
      )}

      {/* Texto Clínica Dental */}
      {showSubText && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <p
            className="font-bold tracking-wider uppercase"
            style={{
              fontSize: `${subTextSize}px`,
              color: subtext_color,
            }}
          >
            Clínica Dental
          </p>
        </motion.div>
      )}
    </div>
  );
};
export default Logo;
