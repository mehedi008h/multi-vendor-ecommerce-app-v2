"use client";

import React, { useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { allBrands } from "@/data/filterSidebar";
import { HorizontalLine } from "../common";
import { Button } from "../ui/button";
import Modal from "../common/Modal";

const FilterModal = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                className="bg-gray-500 bg-opacity-10 hover:bg-gray-500 hover:bg-opacity-10 px-3 py-2 rounded-lg text-primary flex items-center gap-2"
            >
                <VscSettings size={20} /> All Fillters
            </Button>

            <Modal
                open={open}
                setOpen={setOpen}
                className="w-[800px] h-full rounded mx-auto mt-12 flex flex-col"
            >
                {/* header  */}
                <div className="px-3 py-3 flex justify-between items-center border-b border-gray-300">
                    <div className="flex items-center gap-2 text-primary">
                        <VscSettings size={20} />{" "}
                        <h5 className="text-lg font-semibold">
                            Addvance Fillters
                        </h5>
                    </div>
                    <IoClose
                        className="cursor-pointer"
                        size={25}
                        color="gray"
                        onClick={() => setOpen(false)}
                    />
                </div>

                {/* body  */}
                <div className="px-3 py-2 grid grid-cols-12 gap-2">
                    <div className="col-span-3 flex flex-col gap-4">
                        <h5 className="text-primary font-semibold mt-2">
                            Brands
                        </h5>
                        {allBrands.map((brand) => (
                            <div key={brand.id} className="flex gap-2">
                                <input
                                    className="size-5"
                                    type="checkbox"
                                    name="price"
                                    id={`price-${brand.id}`}
                                />

                                <h1 className="text-sm font-medium font-dmSans text-primary group-hover:text-orange-500">
                                    {brand.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                    <div className="col-span-3 flex flex-col gap-4">
                        <h5 className="text-primary font-semibold mt-2">
                            Special offers
                        </h5>
                        {allBrands.map((brand) => (
                            <div key={brand.id} className="flex gap-2">
                                <input
                                    className="size-5"
                                    type="checkbox"
                                    name="price"
                                    id={`price-${brand.id}`}
                                />

                                <h1 className="text-sm font-medium font-dmSans text-primary group-hover:text-orange-500">
                                    {brand.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* footer  */}
                <div className="px-3 py-3 flex justify-start items-center gap-3 border-t border-gray-300 mt-auto">
                    <Button
                        onClick={() => setOpen(!open)}
                        className="bg-primary hover:bg-primary px-3 py-2 rounded text-white"
                    >
                        Apply Fillters
                    </Button>
                    <Button
                        onClick={() => setOpen(!open)}
                        variant="outline"
                        className=" px-3 py-2 rounded text-primary"
                    >
                        Reset Fillters
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default FilterModal;
