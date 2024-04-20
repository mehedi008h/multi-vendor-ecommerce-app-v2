import { placeHolder } from "@/data/images";
import {
    addToCart,
    decreaseCart,
    removeFromCart,
} from "@/redux/slices/cartSlice";
import { CartItem } from "@/types";
import Image from "next/image";
import React from "react";
import { HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
interface Props {
    item: CartItem;
    order: boolean;
}

const CartCard = ({ order = false, item }: Props) => {
    const dispatch = useDispatch();
    // remove from cart
    const handleRemoveFromCart = (item: CartItem) => {
        dispatch(removeFromCart(item));
    };

    // add to cart & incress from cart
    const handleAddToCart = (item: CartItem) => {
        dispatch(addToCart(item));
    };

    // decrease from cart
    const handleDecreaseCart = (item: CartItem) => {
        dispatch(decreaseCart(item));
    };
    return (
        <div>
            <div className="w-full  flex flex-row gap-3">
                {/* image  */}
                <div className="size-16 relative group">
                    <Image
                        className="size-full object-cover rounded-md"
                        src={placeHolder}
                        alt=""
                    />
                    <div className="size-full rounded-md absolute top-0 left-0 bg-black bg-opacity-50 group-hover:flex justify-center items-center hidden">
                        <HiX
                            onClick={() => handleRemoveFromCart(item)}
                            className="mt-1 cursor-pointer"
                            color="red"
                            size={25}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="text-sm text-primary font-normal">
                        {item.name}
                    </h3>

                    <div className="grid grid-cols-12 gap-3 mt-1">
                        <div className="xl:col-span-4 lg:col-span-3 md:col-span-3 col-span-6">
                            <p className="text-xs text-gray-400">Price</p>
                            <h5 className="font-medium text-sm text-secondary mt-1">
                                $ {item.price}
                            </h5>
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-6">
                            <p className="text-xs text-gray-400">Color</p>
                            <h5 className="font-medium text-sm text-secondary mt-1">
                                Red
                            </h5>
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-6">
                            <p className="text-xs text-gray-400">Size</p>
                            <h5 className="font-medium text-sm text-secondary mt-1">
                                M
                            </h5>
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
                                <div className="xl:col-span-4 lg:col-span-3 md:col-span-3 col-span-6">
                                    <p className="text-xs text-gray-400">
                                        Quantity
                                    </p>
                                    <div className="flex flex-row gap-3 w-full mt-1">
                                        <button
                                            onClick={() =>
                                                handleAddToCart(item)
                                            }
                                            className="h-6 w-6 bg-green-500 flex justify-center items-center rounded-full text-white font-semibold"
                                        >
                                            +
                                        </button>
                                        <div className="font-semibold">
                                            {" "}
                                            {item?.cartQuantity}
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleDecreaseCart(item)
                                            }
                                            className="h-6 w-6 bg-red-500 flex justify-center items-center rounded-full text-white font-semibold"
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                                {/* delete  */}
                                {/* <div className="col-span-1 ms-auto my-auto">
                                    <HiX
                                        className="mt-1 cursor-pointer"
                                        color="red"
                                        size={25}
                                    />
                                </div> */}
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
