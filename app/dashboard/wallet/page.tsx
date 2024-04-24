import React from "react";
import { IoWallet } from "react-icons/io5";

const WalletPage = () => {
    return (
        <div className="w-full h-full p-5 bg-neutral-50 rounded-md shadow-md">
            {/* wallet card  */}
            <div className="bg-indigo-400 rounded-md min-h-28 py-5 px-8 flex justify-between items-center">
                <div className="flex flex-col">
                    <p className="text-neutral-200 font-normal">Balance</p>
                    <h3 className="text-white font-semibold text-3xl mt-2">
                        $233
                    </h3>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <IoWallet className="text-white" size={22} />
                    <p className="text-neutral-200 font-normal uppercase">
                        Jhon Doe
                    </p>
                </div>
            </div>

            {/* transation history */}
            <div className="mt-5">
                {/* header  */}
                <div className="bg-neutral-200 py-2 px-4 rounded-t-md">
                    <h3 className="text-neutral-500 font-medium text-xl">
                        Transation
                    </h3>
                </div>

                {/* transation list  */}
                {[
                    {
                        id: 1,
                        title: "Add to your account: #86",
                        date: "2021-05-12",
                        point: 100,
                        type: "added",
                    },
                    {
                        id: 2,
                        title: "Add to your account: #86",
                        date: "2021-05-12",
                        point: 100,
                        type: "remove",
                    },
                    {
                        id: 3,
                        title: "Payment: #86",
                        date: "2021-05-12",
                        point: 20,
                        type: "remove",
                    },
                ].map((transation) => (
                    <div
                        key={transation.id}
                        className="border-b-[1px] border-x-[1px] border-neutral-200 py-2 px-4 rounded-none last:rounded-b-md flex justify-between"
                    >
                        {/* transation title & date  */}
                        <div className="flex flex-col gap-1">
                            <h3 className="text-black font-normal text-base">
                                {transation.title}
                            </h3>
                            <p className="text-neutral-500 font-normal text-sm">
                                {transation.date}
                            </p>
                        </div>

                        {/* transation point & type  */}
                        <div className="flex flex-col items-center gap-1">
                            <h3
                                className={`font-semibold text-lg ${
                                    transation.type === "remove"
                                        ? "text-red-500"
                                        : "text-green-500"
                                }`}
                            >
                                {transation.type === "remove" ? "-" : "+"}{" "}
                                {transation.point}
                            </h3>
                            <p className="text-neutral-500 font-normal text-sm">
                                Point{" "}
                                {transation.type === "remove"
                                    ? "Remove"
                                    : "Added"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WalletPage;
