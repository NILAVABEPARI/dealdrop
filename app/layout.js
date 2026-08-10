import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "DealDrop",
  description: "Track product prices across e-commerce sites and get alerts on price drops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
