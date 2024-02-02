import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import './RecipeList.css'

export default function RecipesList() {



    const [recipes, setRecipes] = useState<String[]>([]);

    useEffect(() => {
        fetch('/api/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data));
    }, []);


    return(
        <div>
            <h1>Recipes List</h1>
            <div className="recipe-card-div">
                {recipes.map((recipes) => {
                    return (<RecipeCard r={ recipes } />)
                }
                )}
            </div>
        </div>


    )
}