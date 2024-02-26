import React from "react";
import { ProductCard } from ".";
import { products } from "@/data/products";

const Products = () => {
    return (
        <div className="grid grid-cols-12 gap-3">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
