import { Button } from './Button';

import ServicesImg from '../assets/images/bloco_services.svg';
import '../styles/bestServices.css'

export function BestServices() {
    return(
        <div className="content-services">
            <aside className="service-img-content">
                <img src={ServicesImg} alt="" />
            </aside>
            <div className="service">
                <div className="service-texts">
                    <h1 className="service-title">The best services ready To serve you</h1>
                    <p className="service-text">
                        Far far away, behind the word mountains,  
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                    </p>
                    <br />
                    <p className="service-text">
                        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <br />
                    <p className="service-text">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <div className="button-service">
                        <Button>Know More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}