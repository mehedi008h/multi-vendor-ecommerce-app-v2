import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    AiOutlineLogout,
    AiOutlineShopping,
    AiOutlineUser,
} from "react-icons/ai";

import { BiUser } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const UserMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="h-12 w-12 flex justify-center items-center border-2 rounded-full hover:text-green-500">
                    <BiUser size={25} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="absolute right-0 min-w-[200px]">
                <DropdownMenuLabel>
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h5 className="text-primary text-base font-medium">
                                Mehedi Hasan
                            </h5>
                            <p className="text-xs text-neutral-500 font-normal">
                                @mehedi08h
                            </p>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={"/dashboard"}>
                    <DropdownMenuItem className="flex gap-2 text-sm font-normal text-neutral-600">
                        <AiOutlineUser size={18} /> Profile
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="flex gap-2 text-sm font-normal text-neutral-600">
                    <AiOutlineShopping size={18} />
                    My Order
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex gap-2 text-sm font-normal text-red-500">
                    <AiOutlineLogout size={18} /> Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserMenu;
