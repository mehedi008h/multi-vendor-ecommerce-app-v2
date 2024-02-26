import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Smart Shopping",
    description: "Multi-vendor ecommerce app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Providers>
                    <ToastContainer />
                    <TooltipProvider>
                        <Navbar />
                        <main className="py-4">{children}</main>{" "}
                    </TooltipProvider>
                </Providers>
            </body>
        </html>
    );
}
