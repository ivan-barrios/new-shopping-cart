import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Shopping Cart",
  description: "By Ivan Barrios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
