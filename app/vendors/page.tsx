import { Heading } from "@/components/common";
import { FilterBar } from "@/components/shop";
import { Button } from "@/components/ui/button";
import { VendorSidebar } from "@/components/vendors";
import React from "react";

const VendorsPage = () => {
    return (
        <div className="container">
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
                <div className="col-span-3">
                    <VendorSidebar />
                </div>
                <div className="col-span-9">
                    <FilterBar />
                </div>
            </div>
        </div>
    );
};

export default VendorsPage;
