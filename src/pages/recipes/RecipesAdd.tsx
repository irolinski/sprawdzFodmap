import { Container, TextField } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"





type InputTypes = {
    name: String,
    prep_time: Number,
    ingredients: String[],
    amount: String,
    equipment: String,
    category: String[],
    description: String,
    recipe_text: String,
    photo: String,
    // ratings
    author: String,
    date: Date, // to be hidden
    //verified
    //id
  }
  
  export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm<InputTypes>()
    const onSubmit: SubmitHandler<InputTypes> = (data) => console.log(data)
  
    return (

        <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input defaultValue="" {...register("bubble")} />
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
    
            <input type="submit" /> */}
        </form>
      </Container>
    )
  }