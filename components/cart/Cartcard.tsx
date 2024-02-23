import { placeHolder } from "@/data/images";
import Image from "next/image";
import React from "react";
import { HiX } from "react-icons/hi";

const CartCard = ({ order = false }) => {
    return (
        <div>
            <div className="w-full flex flex-row gap-3">
                <div className="w-full">
                    <div className="flex gap-3">
                        <div className="size-14 rounded-md bg-gray-400">
                            <Image
                                className="size-14 object-cover rounded-md"
                                src={placeHolder}
                                alt=""
                            />
                        </div>
                        <h3 className="text-base text-primary font-normal">
                            Micropack MHP-03-BK USB Headphone
                        </h3>
                    </div>
                    <div className="grid grid-cols-12 gap-3 mt-1">
                        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-6">
                            <p className="text-sm text-gray-400">Price</p>
                            <h5 className="font-medium text-secondary">
                                434 BDT
                            </h5>
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-6">
                            <p className="text-sm text-gray-400">Color</p>
                            <h5 className="font-medium text-secondary">Red</h5>
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-6">
                            <p className="text-sm text-gray-400">Size</p>
                            <h5 className="font-medium text-secondary">M</h5>
                        </div>

                        {order ? (
                            <>
                                {/* for order section  */}
                                <div className="col-span-4">
                                    <p className="text-sm text-gray-400">
                                        Total
                                    </p>
                                    <h5 className="font-medium text-secondary">
                                        433 * 1 =
                                        <span className="text-green-500">
                                            {" "}
                                            22
                                        </span>
                                    </h5>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* for cart section  */}
                                <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-6">
                                    <p className="text-sm text-gray-400">
                                        Quantity
                                    </p>
                                    <div className="flex flex-row gap-3 w-full">
                                        <button
                                            // onClick={() =>
                                            //     handleAddToCart(cartItem)
                                            // }
                                            className="h-6 w-6 bg-green-500 flex justify-center items-center rounded-full text-white font-semibold"
                                        >
                                            +
                                        </button>
                                        <div className="font-semibold">1</div>
                                        <button className="h-6 w-6 bg-red-500 flex justify-center items-center rounded-full text-white font-semibold">
                                            -
                                        </button>
                                    </div>
                                </div>
                                {/* delete  */}
                                <div className="col-span-2 ms-auto my-auto">
                                    <HiX
                                        className="mt-1 cursor-pointer"
                                        color="red"
                                        size={25}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <hr className="my-4" />
        </div>
    );
};

export default CartCard;
