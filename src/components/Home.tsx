//import { useHistory } from 'react-router-dom';

import { Button } from "./Button";
import { Input } from "./Input";

import HomeImg from '../assets/images/Illustration.svg';
import '../styles/home.css';

export function Home() {
    return(
        <div>
            <main className="home">
                <div className="search-recipe">
                    <div className="content-search">
                        <p className="home-text">Ready for Trying a new recipe?</p>
                        <div className="home-search">
                            <Input type="text" placeholder="Search healthy recipes" />
                            <Button className="button-search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g id="Icon" transform="translate(-195 -616)">
                                    <rect id="Retângulo_9" data-name="Retângulo 9" width="24" height="24" transform="translate(195 616)" fill="#fff" opacity="0"/>
                                    <g id="magnifying-glass" transform="translate(184 605)">
                                    <path id="Caminho_1" data-name="Caminho 1" d="M26.8,25.864l-3.847-3.847a6.737,6.737,0,1,0-.944.944L25.86,26.8a.666.666,0,0,0,.944-.94Zm-9.061-2.72a5.4,5.4,0,1,1,5.4-5.4A5.408,5.408,0,0,1,17.743,23.144Z" transform="translate(4 4)" fill="#fff"/>
                                    </g>
                                </g>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
                <aside className="home-aside">
                    <img src={HomeImg} alt="Main Illustration" className="home-img" />
                </aside>
            </main>
        </div>
    )
}