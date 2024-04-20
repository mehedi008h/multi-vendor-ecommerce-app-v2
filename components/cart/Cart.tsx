"use client";

import React, { useEffect } from "react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { BiCart } from "react-icons/bi";
import { CartCard } from ".";
import Link from "next/link";
import { HiArrowSmRight } from "react-icons/hi";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "@/redux/slices/cartSlice";
import { CartItem } from "@/types";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    return (
        <Sheet>
            <SheetTrigger asChild className="outline-none">
                <button className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500 hover:border-green-300 relative">
                    <BiCart size={25} />
                    <div className="h-6 w-6 flex justify-center items-center rounded-full bg-amber-500 text-white text-sm font-semibold font-roboto absolute -top-1.5 -right-1.5">
                        {cart?.cartItems.length}
                    </div>
                </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
                <SheetHeader className="w-full mt-4">
                    <SheetTitle className="w-full flex justify-between items-center">
                        <h5>Cart ( {cart?.cartItems.length} items)</h5>
                        <Button className="bg-red-600 hover:bg-red-500 text-white h-8">
                            Remove
                        </Button>
                    </SheetTitle>
                </SheetHeader>
                {cart?.cartItems.length === 0 ? (
                    <div>
                        <h1>Empty</h1>
                    </div>
                ) : (
                    <div className="flex flex-col gap-1 overflow-x-auto hide-scroll-bar">
                        {cart.cartItems &&
                            cart.cartItems.map((cartItem: CartItem) => (
                                <CartCard
                                    item={cartItem}
                                    key={cartItem.id}
                                    order={false}
                                />
                            ))}
                    </div>
                )}
                {/* <div className="flex flex-col gap-1 overflow-x-auto hide-scroll-bar">
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div> */}

                <SheetFooter className="mt-auto w-full border-t">
                    {/* checkout  */}
                    <div className="w-full flex flex-row justify-between my-3">
                        <h3 className="text-xl font-semibold">
                            Total:{" "}
                            <span className="text-primary">
                                {" "}
                                {cart?.cartTotalAmount} BDT
                            </span>
                        </h3>
                        <div>
                            <Link
                                href="/checkout"
                                className="bg-primary hover:bg-secondary transition-all text-white px-2 py-1 rounded-md flex items-center gap-2"
                            >
                                Checkout <HiArrowSmRight size={25} />
                            </Link>
                        </div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
