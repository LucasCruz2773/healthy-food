import { Button } from './Button';

type RecipeItemProps = {
    imageUrl: string;
    title: string;
}

export function RecipeItem(props: RecipeItemProps) {
    return (
        <div className="recipe">
            <img src={props.imageUrl} alt="Comida 1" />
            <div className="recipe-content">
                <h1 className="recipe-title">{ props.title }</h1>
                <Button>See Recipe</Button>
            </div>
        </div>
    )
}