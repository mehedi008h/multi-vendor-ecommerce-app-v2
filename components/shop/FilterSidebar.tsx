"use client";

import React from "react";
import Image from "next/image";
import { brands, categories, colors, priceRanges } from "@/data";
import { placeHolder } from "@/data/images";
import { IoIosCheckmark } from "react-icons/io";

const FilterSidebar = () => {
    return (
        <div>
            {/* Product Category  */}
            <div className="border rounded-md">
                <h1 className="font-medium text-lg text-primary p-2 mt-2">
                    Product Category
                </h1>
                <hr className="my-2" />
                <div className="flex flex-col gap-1 transition-all ease-in-out duration-75 p-2">
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
                </div>
            </div>

            {/* product filter  */}
            <div className="border rounded-md mt-2">
                <h1 className="font-medium text-lg text-primary p-2 mt-2">
                    Product Filter
                </h1>
                <hr className="my-2" />
                <div className="flex flex-col gap-1 transition-all ease-in-out duration-75 p-2">
                    <h5 className="font-medium text-lg text-primary mb-2">
                        Price
                    </h5>

                    {priceRanges.map((price) => (
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

                    {/* brands  */}
                    <h5 className="font-medium text-lg text-primary my-2">
                        Brands
                    </h5>

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

                    <h5 className="font-medium text-lg text-primary my-2">
                        Colors
                    </h5>
                    <div className="flex flex-row flex-wrap gap-3 transition-all">
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
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
