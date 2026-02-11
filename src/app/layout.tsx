import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Maximal Construction | Solusi Bangunan Profesional",
  description: "Jasa konstruksi, renovasi, dan aksesoris rumah di Solo & Grobogan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {/* Ubah pt-20 menjadi pt-14 agar pas dengan tinggi navbar baru */}
        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}