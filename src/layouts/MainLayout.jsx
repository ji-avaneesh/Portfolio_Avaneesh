import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function MainLayout({ children }) {
  return (
    <>
      <SEO />
      <Navbar />
      <main style={{ minHeight: "85vh", position: "relative" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
