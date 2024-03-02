import React from "react";
import { Rating } from "../common";

const VendoreProfile = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5 mt-4">
                <div className="col-span-3">
                    <h5>Positive Seller Ratings</h5>
                    <h1 className="text-5xl font-semibold mt-4">83 %</h1>
                    <p className="text-neutral-400">Positive Ratings</p>

                    <div className="mt-4">
                        {/* rating  */}
                        <Rating initialRating={5} total={444} readonly />
                        <Rating initialRating={4} total={344} readonly />
                        <Rating initialRating={3} total={244} readonly />
                        <Rating initialRating={2} total={144} readonly />
                        <Rating initialRating={1} total={44} readonly />
                    </div>
                </div>
                <div className="col-span-9">
                    <h5>Seller Ratings and Reviews (16951)</h5>
                </div>
            </div>
        </div>
    );
};

export default VendoreProfile;
