import { ProductContainer } from "@/components/common";
import { Button } from "@/components/ui/button";
import { BsArrowRightShort } from "react-icons/bs";
import { CategorySlider } from "..";

const FeaturedCategories = () => {
    const rightHeader = (
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500">
            View All
        </Button>
    );
    return (
        <div className="py-2">
            <ProductContainer
                title=" Featured Categories"
                subTitle="Choose your necessary products from this feature categories."
                rightHeader={rightHeader}
            >
                <CategorySlider />
            </ProductContainer>
        </div>
    );
};

export default FeaturedCategories;
