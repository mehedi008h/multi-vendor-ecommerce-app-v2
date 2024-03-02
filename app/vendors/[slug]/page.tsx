"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlineStorefront } from "react-icons/md";
import {
    VendorLinkBar,
    VendoreHome,
    VendoreProducts,
    VendoreProfile,
} from "@/components/vendors";
import { placeHolder } from "@/data/images";
import { Button } from "@/components/ui/button";

enum Tab {
    HOME = "Home Page",
    PRODUCTS = "All Products",
    PROFILE = "Profile",
}

const VendorDetails = () => {
    const [selectedTab, setSelectedTab] = useState<string>(Tab.HOME);
    return (
        <div className="">
            <div className="container w-full h-64 relative">
                {/* vendor cover image  */}
                <Image
                    className="h-64 w-full object-cover rounded-md"
                    src={placeHolder}
                    alt=""
                />

                {/* vendor info  */}
                <div className="w-full absolute  -bottom-20 flex items-end gap-4">
                    {/* vendor profile image  */}
                    <Image
                        className="size-36  border border-primary rounded-md ms-8"
                        src={placeHolder}
                        alt=""
                    />

                    <div className="w-full flex justify-between items-end gap-3">
                        <div>
                            <h4 className="text-lg font-medium text-primary">
                                Shop Name
                            </h4>
                            <p className="text-sm font-normal text-neutral-500">
                                12233 Follower
                            </p>
                            <p className="text-base font-normal text-orange-500">
                                80% Positive Seller Reting
                            </p>
                        </div>

                        {/* vendor chat & follow button  */}
                        <div className="xl:flex lg:flex md:flex hidden gap-3 xl:pr-0 pr-2">
                            <Button
                                variant="outline"
                                className="text-primary flex gap-1"
                            >
                                <MdOutlineStorefront size={20} /> Follow
                            </Button>
                            <Button className="text-white flex gap-1">
                                <IoChatboxEllipsesOutline size={20} /> Chat Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {/* vendor chat & follow button  */}
            <div className="xl:hidden lg:hidden md:hidden flex gap-3 xl:pr-0 pr-2 mt-24 px-2">
                <Button
                    variant="outline"
                    className="text-primary flex gap-1 w-full"
                >
                    <MdOutlineStorefront size={20} /> Follow
                </Button>
                <Button className="text-white flex gap-1">
                    <IoChatboxEllipsesOutline size={20} /> Chat Now
                </Button>
            </div>
            <VendorLinkBar
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            <div className="container mt-4 h-[300vh]">
                {selectedTab === Tab.HOME && <VendoreHome />}
                {selectedTab === Tab.PRODUCTS && <VendoreProducts />}
                {selectedTab === Tab.PROFILE && <VendoreProfile />}
            </div>
        </div>
    );
};

export default VendorDetails;
