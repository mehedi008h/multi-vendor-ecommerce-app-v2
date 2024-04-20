import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link";

interface Category {
    id: number;
    name: string;
    link?: string;
    icon?: React.ReactNode;
    color?: string;
    submenu?: boolean;
}

interface Props {
    category: Category;
}

const LinkItem = ({ category }: Props) => {
    return (
        <>
            {category.link ? (
                <Link
                    href={category.link}
                    key={category.id}
                    className="min-w-fit font-roboto font-medium hover:text-blue-600 link gap-3"
                >
                    <div
                        className={`flex item-center items-center gap-2 ${
                            category.color && category.color
                        }`}
                    >
                        {category.icon && category.icon}
                        <div>{category.name}</div>
                    </div>
                </Link>
            ) : (
                <div className="relative">
                    <button
                        key={category.id}
                        className="font-roboto font-medium hover:text-blue-600 link gap-3 absolute"
                    >
                        <div className="flex item-center items-center gap-2">
                            {category.icon && category.icon}
                            <div>{category.name}</div>

                            <MdKeyboardArrowDown size={20} />
                        </div>
                    </button>
                    {/* {toogleMegaMenu && (
                        <DropdownMenu
                            open={open}
                            top="top-14"
                            left="left-8"
                            width="w-[545px]"
                        >
                            <>{dropdownType}</>
                        </DropdownMenu>
                    )} */}
                </div>
            )}
        </>
    );
};

export default LinkItem;
