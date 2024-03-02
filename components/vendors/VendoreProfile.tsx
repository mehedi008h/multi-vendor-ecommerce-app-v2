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

const VendoreProfile = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5 mt-4">
                <div className="col-span-3">
                    <h5 className="text-base font-medium">
                        Positive Seller Ratings
                    </h5>
                    <h1 className="text-5xl font-semibold mt-4">83 %</h1>
                    <p className="text-neutral-400">Positive Ratings</p>

                    <div className="mt-4">
                        {/* rating  */}
                        <Rating initialRating={5} total={444} readonly />
                        <Rating initialRating={4} total={344} readonly />
                        <Rating initialRating={3} total={244} readonly />
                        <Rating initialRating={2} total={144} readonly />
                        <Rating initialRating={1} total={44} readonly />
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="flex justify-between items-center">
                        <h5 className="text-base font-medium">
                            Product Ratings and Reviews (16951)
                        </h5>
                        <div className="flex items-center gap-3">
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
