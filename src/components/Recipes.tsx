import { RecipeItem } from './RecipeItem';

import Comida1Img from '../assets/images/comida_1.svg';
import Comida2Img from '../assets/images/comida_2.svg';
import Comida3Img from '../assets/images/comida_3.svg';
import Comida4Img from '../assets/images/comida_4.svg';

import '../styles/recipes.css'

export function Recipes() {
    return(
        <div className="content-recipes">
            <div className="header-recipes">
                <h1 className="title-recipes">Our Best Recipes</h1>
                <p className="description-recipes">
                    Far far away, behind the word mountains,  
                    far from the countries Vokalia and Consonantia, 
                    there live the blind texts.
                </p>
            </div>
            <div className="list-recipes">
                <RecipeItem title="Broccoli Salad with Bacon" imageUrl={Comida1Img} />
                <RecipeItem title="Classic Beef Burguers" imageUrl={Comida2Img} />
                <RecipeItem title="Classic Potato Salad" imageUrl={Comida3Img} />
                <RecipeItem title="Cherry Cobbler on the Grill" imageUrl={Comida4Img} />
            </div>
        </div>
    )
}