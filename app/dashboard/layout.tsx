import { Sidebar } from "@/components/dashboard";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="container grid grid-cols-10 gap-5 p-12">
            <aside className="col-span-2">
                <Sidebar />
            </aside>
            <main className="col-span-8">{children}</main>
        </div>
    );
};

export default DashboardLayout;
