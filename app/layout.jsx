import "./globals.css";

export const metadata = {
  title: "Cabro City — Paving the Future",
  description: "Premium cabro paving, landscaping & ground engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f0f0f] text-white">
        {children}
      </body>
    </html>
  );
}
