import React from "react";
import { CgMenuGridO } from "react-icons/cg";

const sidebarLinks = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "Profile",
        path: "/dashboard/profile",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "Wallet",
        path: "/dashboard/wallet",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "Change Password",
        path: "/dashboard/change-password",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "Whitelist",
        path: "/dashboard/whitelist",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "My Order",
        path: "/dashboard/my-order",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "Followed Store",
        path: "/dashboard/followed-store",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "Setting",
        path: "/dashboard/setting",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "Address",
        path: "/dashboard/address",
        icon: <CgMenuGridO size={20} />,
    },
];

const Sidebar = () => {
    return (
        <div className="w-full h-fit flex flex-col bg-white rounded-md shadow-md">
            {sidebarLinks.map((link, index) => (
                <div
                    className="flex items-center gap-2 text-base font-normal text-neutral-600 hover:bg-neutral-50 hover:text-primary px-3 py-2 cursor-pointer"
                    key={index}
                >
                    {link.icon} <p>{link.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
