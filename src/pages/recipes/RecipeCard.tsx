import Moment from 'react-moment'
import './RecipeCard.css'

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';

import { Rating, Typography } from '@mui/material';

// type recipeProp = {
//     name: String,
//     prep_time_min: Number,
//     ingredients: String[],
//     amount: String,
//     equipment: String,
//     category: String[],
//     description: String,
//     recipe_text: String,
//     photo: String,
//     ratings: Number[],
//     date: Date,
//     id: String
// }

export default function RecipeCard( { r }: any) {

    console.log(r)


    const averageRating = function () {
        let arr = r.ratings
        let sum = 0
        for (let i = 0; i < arr.length; i++){
            sum += Number(arr[i])
        }
        return (sum / arr.length)
    }

    const rating = averageRating()

    const capitalize = function (str: String){
        return str[0].toUpperCase() + str.slice(1);
    }

    const returnIngredients = function () {
        
        const obj: String[] = [] 
        const arr = r.ingredients

       for (let i = 0; i < arr.length - 1; i++){
            obj.push(`${capitalize(arr[i])}, `)
       }
       obj.push(`${capitalize(arr[arr.length-1])}`)

       return obj
    }

    
    return(

     <div className='recipe-card'>


        <img className="recipe-image" src={r.photo} />

        <header>
            <h1 className="title">{r.name}</h1> 
            <div id="recipe-info-div">
                <div className="recipe-info-1">
                    <span><AccessTimeFilledIcon fontSize='small' /> Czas: {r.prep_time_min}</span>
                    <span className="portion">
                        <RestaurantIcon fontSize='small'/> {r.amount}
                    </span>
                </div>
            </div>
        </header>
        <main>
            <div id="ingredients-div">
                <span><KitchenIcon fontSize='small'/> Składniki: <br />
                {returnIngredients()}
                </span>
            </div>

            <div id="description-div">
                <DescriptionIcon /> Opis: <br />
                {r.description}
            </div>
        </main>

        <footer>
                <div id="rating-div">
                    <Typography component="legend">Ocena: {rating} </Typography>
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.2} readOnly />
                </div>
                <div id="date-div">
                    <CalendarMonthIcon /> <Moment format="DD/MM/YY">{r.date}</Moment>
                </div>
        </footer>

    </div>
    
    )

}
