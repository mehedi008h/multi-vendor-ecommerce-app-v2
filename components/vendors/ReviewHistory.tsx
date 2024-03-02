import { placeHolder } from "@/data/images";
import Image from "next/image";
import React from "react";
import { Rating } from "../common";

const ReviewHistory = () => {
    return (
        <div className="flex gap-3">
            <div>
                <Image className="size-16 rounded" src={placeHolder} alt="" />
            </div>
            <div>
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
                <div className="flex flex-row flex-wrap gap-3 mt-2">
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
            </div>
        </div>
    );
};

export default ReviewHistory;
