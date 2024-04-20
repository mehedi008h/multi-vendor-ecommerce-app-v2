import Link from "next/link";
import React from "react";
import { IoCallOutline } from "react-icons/io5";

const TopHead = () => {
    return (
        <div className="w-full border-b xl:block lg:block hidden">
            <div className="container h-8 flex justify-between items-center font-dmSans">
                {/* link  */}
                <div className="flex flex-row gap-4 text-green-700 text-sm">
                    <Link className="hover:text-green-500" href={"/admin"}>
                        Admin
                    </Link>
                    <Link className="hover:text-green-500" href={"/"}>
                        Blog
                    </Link>
                    <Link className="hover:text-green-500" href={"/"}>
                        About Us
                    </Link>
                    <Link className="hover:text-green-500" href={"/"}>
                        Career
                    </Link>
                </div>
                {/* ad  */}
                <div>
                    <p className="font-semibold">
                        60% free delivery for all product
                    </p>
                </div>
                {/* info */}
                <div className="flex flex-row items-center gap-1 text-sm group">
                    <p className="text-green-700 ml-1">Need help? Call us</p>
                    <IoCallOutline
                        size={16}
                        className="group-hover:text-green-700"
                    />
                    <p className="text-gray-600 group-hover:text-green-700">
                        +88012345678
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopHead;
