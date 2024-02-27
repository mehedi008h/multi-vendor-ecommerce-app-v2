import { Heading } from "@/components/common";
import { FilterBar } from "@/components/shop";
import { Button } from "@/components/ui/button";
import { VendorSidebar, Vendors } from "@/components/vendors";
import React from "react";

const VendorsPage = () => {
    return (
        <div className="container xl:px-0 px-2">
            {/* heading  */}
            <Heading
                title="Vendors Listing"
                subTitle="We have 780 vendors now"
                rightSide={
                    <Button className="bg-primary  text-white">
                        Open a Shop
                    </Button>
                }
                titleClassName="mb-2"
            />
            {/* vendors container  */}
            <div className="grid grid-cols-12 mt-5 gap-5">
                {/* sidebar  */}
                <div className="xl:col-span-3 col-span-12">
                    <VendorSidebar />
                </div>
                <div className="xl:col-span-9 col-span-12">
                    <FilterBar />
                    <Vendors />
                </div>
            </div>
        </div>
    );
};

export default VendorsPage;
