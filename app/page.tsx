import { Banner, Service } from "@/components/home";
import FeaturedCategories from "@/components/home/category/FeaturedCategories";

export default function Home() {
    return (
        <main className="container min-h-screen">
            {/* hero section  */}
            <Banner />
            <Service />
            <FeaturedCategories />
        </main>
    );
}
