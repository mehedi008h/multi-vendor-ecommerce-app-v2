import React from "react";
import { Rating } from "../common";
import Image from "next/image";
import { placeHolder } from "@/data/images";
import { ReviewHistory } from ".";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const VendoreProfile = () => {
    return (
        <div className="xl:px-0 px-2">
            <div className="grid grid-cols-12 gap-5 mt-4">
                <div className="xl:col-span-3 col-span-12">
                    <h5 className="text-base font-medium text-primary">
                        Positive Seller Ratings
                    </h5>
                    <div className="flex xl:flex-col flex-row xl:items-start items-center xl:justify-start justify-center">
                        <div>
                            <h1 className="text-5xl font-semibold mt-4">
                                83 %
                            </h1>
                            <p className="text-neutral-400">Positive Ratings</p>
                        </div>

                        <div className="mt-4 xl:ms-0 ms-5">
                            {/* rating  */}
                            <Rating initialRating={5} total={444} readonly />
                            <Rating initialRating={4} total={344} readonly />
                            <Rating initialRating={3} total={244} readonly />
                            <Rating initialRating={2} total={144} readonly />
                            <Rating initialRating={1} total={44} readonly />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9 col-span-12">
                    <div className="flex justify-between items-center">
                        <h5 className="text-base font-medium text-primary">
                            Product Ratings and Reviews (16951)
                        </h5>

                        {/* sort & filter review for web  */}
                        <div className="xl:flex lg:flex hidden items-center gap-3">
                            <div className="flex items-center gap-2 relative">
                                <h3 className="text-gray-400">Sort by : </h3>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="outline-none">
                                        <div className="flex items-center gap-2 text-primary cursor-pointer">
                                            <h3 className="font-medium text-base">
                                                Relevance
                                            </h3>
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            Relevance
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Recent
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Rating: High to Low
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Rating: Low to High
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="flex items-center gap-2 relative">
                                <h3 className="text-gray-400">Filter : </h3>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="outline-none">
                                        <div className="flex items-center gap-2 text-primary cursor-pointer">
                                            <h3 className="font-medium text-base">
                                                5 Star
                                            </h3>
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            All Star
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            5 Star
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            4 Star
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            3 Star
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            2 Star
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            1 Star
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        {/* sort & filter review for tab & mobile  */}
                        <div className="xl:hidden lg:hidden block">
                            <Drawer>
                                <DrawerTrigger>Open</DrawerTrigger>
                                <DrawerContent className="h-[400px] bg-neutral-200">
                                    <DrawerHeader>
                                        <DrawerTitle className="text-center">
                                            Are you absolutely sure?
                                        </DrawerTitle>
                                        <DrawerDescription className="text-center">
                                            This action cannot be undone.
                                        </DrawerDescription>
                                    </DrawerHeader>
                                    <div className="my-1 px-4 grid grid-cols-12 gap-5">
                                        <div className="col-span-6">
                                            <h3 className="text-primary font-semibold">
                                                Sort by :{" "}
                                            </h3>
                                            {[
                                                "Relevance",
                                                "Recent",
                                                "Rating: High to Low",
                                                "Rating: Low to High",
                                            ].map((sort) => (
                                                <div
                                                    key={sort}
                                                    className="items-top flex space-x-2 mt-3"
                                                >
                                                    <Checkbox
                                                        id="terms1"
                                                        className="text-white"
                                                    />
                                                    <div className="grid gap-1.5 leading-none">
                                                        <label
                                                            htmlFor="terms1"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {sort}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-span-6">
                                            <h3 className="text-primary font-semibold">
                                                Filter by :{" "}
                                            </h3>
                                            {[
                                                "All Star",
                                                "5 Star",
                                                "4 Star",
                                                "3 Star",
                                                "2 Star",
                                                "1 Star",
                                            ].map((filter) => (
                                                <div
                                                    key={filter}
                                                    className="items-top flex space-x-2 mt-3"
                                                >
                                                    <Checkbox
                                                        id="terms1"
                                                        className="text-white"
                                                    />
                                                    <div className="grid gap-1.5 leading-none">
                                                        <label
                                                            htmlFor="terms1"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {filter}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <DrawerFooter className="flex flex-row gap-5">
                                        <Button className="w-full text-white">
                                            Apply
                                        </Button>
                                        <DrawerClose className="w-full">
                                            <Button
                                                className="w-full "
                                                variant="outline"
                                            >
                                                Cancel
                                            </Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-5">
                        <ReviewHistory />
                        <ReviewHistory />
                        <ReviewHistory />
                        <ReviewHistory />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendoreProfile;
