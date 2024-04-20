"use client";

import { placeHolder } from "@/data/images";
import Image from "next/image";
import React from "react";
import { PiHeartHalfDuotone } from "react-icons/pi";
import { LuGitCompare } from "react-icons/lu";
import { Button } from "../ui/button";
import { AiFillStar, AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import { ProductCardButton } from ".";
import Link from "next/link";
import { Product } from "@/types";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    const dispatch = useDispatch();

    const handleAddToCart = (item: Product) => {
        dispatch(addToCart(item));
    };
    return (
        <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12 bg-white border border-gray-200 rounded-md p-3 group">
            {/* product image  */}
            <div className="relative transition-all delay-700">
                <Image src={product.image} alt="product" />

                <div className="bg-orange-500 text-white text-xs font-light py-1 px-2 rounded-xl absolute top-0 left-0">
                    -{product.discount}%
                </div>

                {/* right side => button bar */}
                <div className="w-8 absolute top-0 right-0 flex-col gap-3 hidden group-hover:flex">
                    <ProductCardButton
                        icon={<PiHeartHalfDuotone size={21} />}
                        tooltipContent="Whitelist"
                    />
                    <ProductCardButton
                        icon={<LuGitCompare size={21} />}
                        tooltipContent="Compare"
                        className="hover:text-green-500"
                    />
                    <ProductCardButton
                        icon={<AiOutlineEye size={21} />}
                        tooltipContent="View"
                        className="hover:text-blue-500"
                    />
                </div>
            </div>
            {/* product info  */}
            <div className="mt-2 flex flex-col gap-2">
                <p className="font-normal text-xs text-primary text-opacity-80">
                    Apple
                </p>
                <Link href={"/"}>
                    <h5 className="font-semibold text-sm text-primary">
                        {product.name}
                    </h5>
                </Link>
                {/* rating  */}
                <div className="flex items-center gap-1">
                    <AiFillStar size={20} className="text-orange-500" />{" "}
                    <AiFillStar size={20} className="text-orange-500" />{" "}
                    <AiFillStar size={20} className="text-orange-500" />{" "}
                    <AiFillStar size={20} className="text-orange-500" />{" "}
                    <AiOutlineStar size={20} className="text-orange-500" />{" "}
                    <p className="text-sm text-secondary">(225)</p>
                </div>
                {/* price  */}
                <div className="flex items-center gap-2">
                    <h5 className="font-semibold text-xl text-primary">
                        $ {product.price}
                    </h5>
                    <h5 className="font-semibold text-base text-secondary line-through">
                        $ 284.50
                    </h5>
                </div>

                <Button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-transparent text-primary border border-primary hover:bg-primary hover:text-white mt-2"
                >
                    Add to cart
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
