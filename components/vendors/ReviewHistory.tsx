import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { HorizontalLine, Rating, VerticalLine } from "../common";
import { placeHolder } from "@/data/images";

const ReviewHistory = () => {
    return (
        <div className="w-full flex gap-3 pb-2">
            <div className="w-16">
                <Image className="size-16 rounded" src={placeHolder} alt="" />
                <div className="pt-3 pb-16  h-full">
                    <VerticalLine className="h-full ms-7 bg-neutral-300 w-0.5 border-2 rounded-b-2xl" />
                </div>
            </div>
            <div className="w-full">
                <h5 className="text-base font-medium">
                    Manfares Casual Hoodie For Men
                </h5>
                <p className="text-sm font-normal text-neutral-400">
                    Color Family: <span>Black</span>, Size: <span>M</span>
                </p>
                <Rating initialRating={3.2} readonly />

                <p className="mt-2 text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error, quae!
                </p>
                <div className="w-full flex flex-row flex-wrap gap-3 mt-2">
                    <Image
                        className="size-16 rounded"
                        src={placeHolder}
                        alt=""
                    />
                    <Image
                        className="size-16 rounded"
                        src={placeHolder}
                        alt=""
                    />
                    <Image
                        className="size-16 rounded"
                        src={placeHolder}
                        alt=""
                    />
                </div>
                <p className="mt-2 text-sm font-normal text-neutral-500">
                    Mehedi Hasan <span> - 16 Dec 2023</span>
                </p>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <FaHeart color="red" className="cursor-pointer" />{" "}
                        <p className="text-neutral-500">2</p>
                    </div>
                    <HiOutlineDotsVertical />
                </div>

                {/* seller  reply */}
                <HorizontalLine className="my-1 bg-neutral-200" />
                <p className="mt-2 text-sm font-medium">
                    Seller Response <span> - 16 Dec 2023</span>
                </p>
                <p className="my-1 text-neutral-500 text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <FaHeart color="red" className="cursor-pointer" />{" "}
                        <p className="text-neutral-500">2</p>
                    </div>
                    <HiOutlineDotsVertical />
                </div>
            </div>
        </div>
    );
};

export default ReviewHistory;
