import React from "react";
import { FilterBar, FilterSidebar, Products } from "../shop";

const VendoreProducts = () => {
    return (
        <div className="grid grid-cols-12 gap-3 py-3 xl:px-0 px-2">
            <div className="xl:col-span-3 col-span-12">
                {/* filter sidebar for web  */}
                <FilterSidebar />
            </div>
            <div className="xl:col-span-9 col-span-12">
                <FilterBar />
                <Products />
            </div>
        </div>
    );
};

export default VendoreProducts;
