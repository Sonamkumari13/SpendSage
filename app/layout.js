import { Inter } from "next/font/google"; // Importing Inter font properly
import "./globals.css"; // Import global styles
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

// Apply Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpendSage",
  description: "Financial advisor", 
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={'${inter.className}'}> {/* Corrected interpolation */}
        {/*header*/}
        <Header></Header>
        <main className = "min-h-screen">{children}</main>
        <Toaster richColors />
        
        {/* footer */}
        <footer className = "bg-blue-50 h-20">
          <div className = "container mx-auto px-4 text-center text-grey-600">
          <p>Made with SpendSage</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
