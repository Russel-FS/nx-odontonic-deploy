"use client";

import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import WhatsAppFloat from "./WhatsAppFloat";

const LayoutClient = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default LayoutClient;
