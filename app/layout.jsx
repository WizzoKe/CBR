export const metadata = {
  title: "Cabro City Construction",
  description: "Expert cabro installation, paving, landscaping & civil works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#f7f7f7",
          color: "#1b1b1b",
        }}
      >
        {children}
      </body>
    </html>
  );
}
