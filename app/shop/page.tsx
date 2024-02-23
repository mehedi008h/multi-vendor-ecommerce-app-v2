import {
    EventSlider,
    FilterBar,
    FilterSidebar,
    Products,
} from "@/components/shop";

const ShopPage = () => {
    return (
        <div className="container grid grid-cols-12 gap-3 py-3">
            <div className="col-span-3">
                <FilterSidebar />
            </div>
            <div className="col-span-9">
                <EventSlider />
                <FilterBar />
                <Products />
            </div>
        </div>
    );
};

export default ShopPage;
