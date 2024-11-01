import { ShopCard } from "../components/shopCard/ShopCard";
import { Cards } from "../components/threeCard/Card";
import { Header } from "../header/Header";

export const Home = () => {
    return (
    <section>
        <Header/>
        <Cards/>
        <ShopCard/>
    </section>
    );
};