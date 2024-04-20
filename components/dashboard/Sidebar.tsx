import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { IoSettingsOutline, IoWalletOutline } from "react-icons/io5";
import { LuLayoutList } from "react-icons/lu";
import { RiStore2Line } from "react-icons/ri";
import { TbPasswordUser } from "react-icons/tb";

const sidebarLinks = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <CgMenuGridO size={20} />,
    },
    {
        name: "Profile",
        path: "/dashboard/profile",
        icon: <AiOutlineUser size={20} />,
    },
    {
        name: "Wallet",
        path: "/dashboard/wallet",
        icon: <IoWalletOutline size={20} />,
    },
    {
        name: "Change Password",
        path: "/dashboard/change-password",
        icon: <TbPasswordUser size={20} />,
    },
    {
        name: "Whitelist",
        path: "/dashboard/whitelist",
        icon: <IoIosHeart size={20} />,
    },
    {
        name: "My Order",
        path: "/dashboard/my-order",
        icon: <LuLayoutList size={20} />,
    },
    {
        name: "Followed Store",
        path: "/dashboard/followed-store",
        icon: <RiStore2Line size={20} />,
    },
    {
        name: "Setting",
        path: "/dashboard/setting",
        icon: <IoSettingsOutline size={20} />,
    },
    {
        name: "Address",
        path: "/dashboard/address",
        icon: <FaRegAddressCard size={20} />,
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
