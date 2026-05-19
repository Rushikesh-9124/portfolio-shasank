import "./globals.css";

export const metadata = {
  title: "Shasank Reddy — AI & ML Engineer",
  description: "Portfolio of Shasank Reddy Lakkireddy — AI/ML Engineer, Deep Learning, NLP, Data Science",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
