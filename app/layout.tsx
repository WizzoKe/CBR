import "./globals.css";

export const metadata = {
  title: "CabroCity",
  description: "Modern cabros, paving and construction solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
