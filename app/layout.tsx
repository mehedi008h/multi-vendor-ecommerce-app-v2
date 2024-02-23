import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";

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
                <TooltipProvider>
                    <Navbar />
                    <main className="py-4">{children}</main>{" "}
                </TooltipProvider>
            </body>
        </html>
    );
}
