"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    allBrands,
    allCategories,
    colors,
    priceRanges,
} from "@/data/filterSidebar";
import { placeHolder } from "@/data/images";
import { IoIosCheckmark } from "react-icons/io";
import { FilterWrapper } from "./FilterWrapper";

const FilterSidebar = () => {
    // state
    const [categoryExpand, setCategoryExpand] = useState<boolean>(false);
    const [priceExpand, setPriceExpand] = useState<boolean>(false);
    const [brandExpand, setBrandExpand] = useState<boolean>(false);

    // expand all filters
    let categories = categoryExpand ? allCategories : allCategories.slice(0, 7);
    let prices = priceExpand ? priceRanges : priceRanges.slice(0, 5);
    let brands = brandExpand ? allBrands : allBrands.slice(0, 5);
    return (
        <div>
            {/* Product Category  */}
            <div className="border rounded-md">
                <h1 className="font-medium text-lg text-primary p-2 mt-2">
                    Product Category
                </h1>
                <hr className="my-2" />
                <FilterWrapper expandButton toogleExpand={setCategoryExpand}>
                    <>
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="flex justify-between items-center p-2 border rounded-md hover:border-teal-50 hover:shadow-md cursor-pointer group"
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="w-7 h-7 rounded-md">
                                        <Image
                                            className="w-full h-full rounded-md"
                                            src={placeHolder}
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="text-sm font-medium font-dmSans text-primary group-hover:text-orange-500">
                                        {category}
                                    </h1>
                                </div>
                                <div className="bg-primary bg-opacity-10 px-2 py-1 rounded-md text-sm text-primary group-hover:text-white group-hover:bg-orange-500">
                                    1121
                                </div>
                            </div>
                        ))}
                    </>
                </FilterWrapper>
            </div>

            {/* product filter  */}
            <div className="border rounded-md mt-2">
                <h1 className="font-medium text-lg text-primary p-2 mt-2">
                    Product Filter
                </h1>
                <hr className="my-2" />

                {/* prices filter */}
                <FilterWrapper
                    filterTitle="Prices"
                    expandButton
                    toogleExpand={setPriceExpand}
                >
                    <>
                        {prices.map((price) => (
                            <div
                                key={price.id}
                                className="flex justify-between items-center p-2 border rounded-md hover:border-teal-50 hover:shadow-md cursor-pointer group"
                            >
                                <div className="flex gap-2">
                                    <input
                                        className="h-5 w-5"
                                        type="checkbox"
                                        name="price"
                                        id={`price-${price.id}`}
                                    />

                                    <h1 className="text-sm font-medium font-dmSans text-primary group-hover:text-orange-500">
                                        {price.range}
                                    </h1>
                                </div>
                                <div className="bg-primary bg-opacity-10 px-2 py-1 rounded-md text-sm text-primary group-hover:text-white group-hover:bg-orange-500">
                                    1121
                                </div>
                            </div>
                        ))}
                    </>
                </FilterWrapper>

                {/* brands  filter */}
                <FilterWrapper
                    filterTitle="Brands"
                    expandButton
                    toogleExpand={setBrandExpand}
                >
                    <>
                        {brands.map((brand) => (
                            <div
                                key={brand.id}
                                className="flex justify-between items-center p-2 border rounded-md hover:border-teal-50 hover:shadow-md cursor-pointer group"
                            >
                                <div className="flex gap-2">
                                    <input
                                        className="h-5 w-5"
                                        type="checkbox"
                                        name="price"
                                        id={`price-${brand.id}`}
                                    />

                                    <h1 className="text-sm font-medium font-dmSans text-primary group-hover:text-orange-500">
                                        {brand.name}
                                    </h1>
                                </div>
                                <div className="bg-primary bg-opacity-10 px-2 py-1 rounded-md text-sm text-primary group-hover:text-white group-hover:bg-orange-500">
                                    1121
                                </div>
                            </div>
                        ))}
                    </>
                </FilterWrapper>

                {/* colors  filter */}
                <FilterWrapper filterTitle="Colors">
                    <div className="flex flex-row flex-wrap gap-2">
                        {colors.map((color) => (
                            <div
                                key={color.id}
                                className="w-10 h-10 rounded-full relative group"
                                style={{
                                    backgroundColor: color.name.toLowerCase(),
                                }}
                            >
                                <div className="w-10 h-10 rounded-full group-hover:flex justify-center items-center translate duration-500  transition-all absolute hidden">
                                    <IoIosCheckmark color="#fff" size={28} />
                                </div>
                            </div>
                        ))}
                    </div>
                </FilterWrapper>
            </div>
        </div>
    );
};

export default FilterSidebar;
