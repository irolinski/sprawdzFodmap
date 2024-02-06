import { Container, TextField, Button, Stack, Grid, Autocomplete, Chip, FormLabel, FormControl, TextareaAutosize } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import './RecipesAdd.css'
import { TagsInput } from "react-tag-input-component"


type ingredients = {
    names: string[]
    amounts: string[]
}

type InputTypes = {
    name: string,
    prep_time: number | null,
    ingredients: ingredients,
    amount: string,
    equipment: string,
    category: string[],
    description: string,
    recipe_text: string,
    photo: string,
    // ratings
    author: string,
    date: Date | null, // to be hidden
    //verified
    //id
  }
  
  export default function RecipeForm () {
    // const { register, handleSubmit, formState: { errors } } = useForm<InputTypes>()
    // const onSubmit: SubmitHandler<InputTypes> = (data) => console.log(data)
    
        const form = useForm<InputTypes> ({
            defaultValues: {
                name: '',
                prep_time: null,

                                            amount: '',
                equipment: '',
                category: [],
                description: '',
                recipe_text: '',
                photo: '',
                // ratings
                author: '',
                date: null, // to be hidden
                //verified
                //id
                
            }
        });

        
        const { register, handleSubmit } = form;

        const submitForm = (data: any) => {

            equipment = equipment.join(', ')
            equipment.substring(0, equipment.length - 1)

            data.ingredients = ingredients
            data.equipment = equipment
            console.log(data)
        };

        const categoryList = [
            { name: "Śniadanie" },
            { name: "Obiad" },
            { name: "Kolacja" },
            { name: "Przekąska" },
            { name: "Deser" },
            { name: "Wegańskie" },
            { name: "Wegetariańskie" },
            { name: "Bezglutenowe" }



        ]

        const [categories, setCategories] = useState<any[]>([])
        const [ingredients, setIngredients] = useState<any[]>([])
        let [equipment, setEquipment] = useState<any>([])
        const [recipeTemplate, setRecipeTemplate] = useState<any>('')

        const setSetRecipeTemplate = () => {
            let template = 'Składniki: \n \n'
            ingredients.map((i) =>{
                template += i + ':' + '\n'
            })
            template += '\n \n' + 'Sposób przygotowania: \n' 

            setRecipeTemplate(template)
        }
        
    return (

        <form id="add-recipes-form" onSubmit={handleSubmit(submitForm)} noValidate> 
            <Grid container spacing={2} width={330}>
                <Grid item xs={12}>
                    <TextField label="Nazwa dania" type="text" {...register('name')} />
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        value={categories}
                        onChange={(event, newValue) => {
                        setCategories(newValue);
                        }}
                        multiple
                        id="tags-filled"
                        options={categoryList.map((option) => option.name)}
                        freeSolo
                        renderTags={(value: string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                            <Chip
                            label={option}
                            {...getTagProps({ index })}
                            />
                        ))
                        }
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Wybierz kategorie"
                        />
                     )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Porcja na..." type="text" {...register('amount')}/>
                </Grid>
                <Grid item xs={5}>
                    <TextField label="Czas przygotowania" type="number" {...register('prep_time')}/>
                </Grid>
                <Grid item xs={1}>
                    <span id="time-span">min.</span>
                </Grid>
                <Grid item xs={6}>
                    <TagsInput value={equipment} onChange={setEquipment} placeHolder="Narzędzia"/>
                </Grid>
                <Grid item xs={12}>
                    <TagsInput value={ingredients} onChange={setIngredients} placeHolder="Wprowadź składniki"/>
                </Grid>
                <Grid item xs={12}>
                        <FormLabel>Krótki opis:</FormLabel>
                        <TextField fullWidth multiline={true} rows={3}/>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Przepis:</FormLabel>
                        <TextareaAutosize minRows={10} defaultValue={recipeTemplate} onClick={() => setSetRecipeTemplate()}  placeholder="..." />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Wyślij
                    </Button>
                </Grid>

            </Grid>
        </form>
    )
  }