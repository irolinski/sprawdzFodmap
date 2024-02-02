import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import './RecipeList.css'

export default function RecipesList() {



    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/recipes')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);



    return(
        <div>
            <h1>Recipes List</h1>
            <div className="recipe-card-div">
                <RecipeCard />
            </div>
        </div>


    )
}