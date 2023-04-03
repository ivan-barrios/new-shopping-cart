import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Undefined",
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
