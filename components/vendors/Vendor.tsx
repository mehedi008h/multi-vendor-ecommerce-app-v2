import React from "react";
import { MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";
import { HorizontalLine } from "../common";
import Image from "next/image";
import { placeHolder } from "@/data/images";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const Vendor = () => {
    return (
        <div className="xl:col-span-4 lg:col-span-4 md:col-span-6 col-span-12 border border-gray-300 rounded hover:border-secondary group transition-all delay-300">
            <div className="w-full h-36 relative">
                <Image className="h-36 object-cover" src={placeHolder} alt="" />
                <Image
                    className="h-12 w-20 object-cover absolute left-4 -bottom-4 border border-primary rounded-md"
                    src={placeHolder}
                    alt=""
                />
                {/* rating  */}
                <div className="flex items-center gap-0 mt-4 absolute bottom-2 right-2">
                    <AiFillStar size={20} className="text-orange-500" />{" "}
                    <AiFillStar size={20} className="text-orange-500" />{" "}
                    <AiFillStar size={20} className="text-orange-500" />{" "}
                    <AiFillStar size={20} className="text-orange-500" />{" "}
                    <AiOutlineStar size={20} className="text-orange-500" />{" "}
                    <p className="text-sm text-secondary">(225)</p>
                </div>

                <div className="bg-primary px-4 py-1 rounded-2xl text-white text-sm items-center gap-2 absolute top-2 right-3 cursor-pointer hidden group-hover:flex">
                    <FaRegEye /> 360 Product
                </div>
            </div>
            <div className="mt-5 p-3">
                <h5 className="text-xs font-semibold text-secondary">
                    Shop Type
                </h5>
                <h5 className="text-base font-semibold text-primary cursor-pointer">
                    Lorem ipsum dolor sit amet.
                </h5>
                <p className="text-gray-400 text-xs font-normal mt-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium voluptatibus tenetur blanditiis deleniti nemo?
                </p>
            </div>

            <HorizontalLine className="bg-gray-300 h-[0.5px]" />
            {/* contact  */}
            <div className="p-3">
                <div className="flex flex-row items-center gap-3">
                    <div className="w-5">
                        <MdOutlineLocationOn
                            className="size-5 text-gray-500"
                            size={20}
                        />
                    </div>
                    <p className="text-gray-500 text-xs font-normal">
                        5171 W Campbell Ave undefined Kent, Utah 53127 United
                        States
                    </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                    <div className="w-5">
                        <MdOutlineLocalPhone
                            className=" text-gray-500"
                            size={18}
                        />
                    </div>
                    <p className="text-gray-500 text-xs font-normal">
                        (+91) - 540-025-124553
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Vendor;
