import React from "react";
import { ProductCard } from ".";

const Products = () => {
    return (
        <div className="grid grid-cols-12 gap-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default Products;
