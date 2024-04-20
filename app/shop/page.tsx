import {
    EventSlider,
    FilterBar,
    FilterSidebar,
    Products,
} from "@/components/shop";

const ShopPage = () => {
    return (
        <div className="container grid grid-cols-12 gap-3 py-3 xl:px-0 px-2">
            <div className="xl:col-span-3 col-span-12">
                {/* filter sidebar for web  */}
                <FilterSidebar />
            </div>
            <div className="xl:col-span-9 col-span-12">
                <EventSlider />
                <FilterBar />
                <Products />
            </div>
        </div>
    );
};

export default ShopPage;
