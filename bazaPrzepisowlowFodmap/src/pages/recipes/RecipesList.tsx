import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import './RecipeList.css'

import '@fontsource/roboto/400.css';
import Header from "../../components/Header";

export default function RecipesList() {



    const [recipes, setRecipes] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data));
    }, []);


    return(
        <div>
            <Header head={'Recipes'} />
            <div>
                <button><a href="/recipes/add">Add a new recipe</a></button>
            </div>
            <div className="recipe-card-div">
                {recipes.map((recipes) => {
                    return (<RecipeCard r={ recipes } key={ recipes.id }/>)
                }
                )}
            </div>
        </div>


    )
}