import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Recipes } from "../components/Recipes";
import { BestServices } from "../components/BestServices";
import { Blog } from "../components/Blog";
import { Join } from "../components/Join";

import '../styles/main.css'

export function Main() {
    return (
        <div className="content">
            <Header />
            <Home />
            <Recipes />
            <BestServices />
            <Blog />
            <Join />
        </div>
    )
}