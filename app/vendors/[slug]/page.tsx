"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    VendorLinkBar,
    VendoreHome,
    VendoreProducts,
    VendoreProfile,
} from "@/components/vendors";
import { placeHolder } from "@/data/images";

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
                <Image
                    className="h-64 w-full object-cover rounded-md"
                    src={placeHolder}
                    alt=""
                />
                <Image
                    className="size-36 absolute left-8 -bottom-20 border border-primary rounded-md"
                    src={placeHolder}
                    alt=""
                />
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
