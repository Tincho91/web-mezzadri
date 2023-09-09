"use client";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Propiedades Mezzadri",
  description: "Encuentra tu proximo hogar o inversion en Mar del Plata",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}