import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


import { Container, TextField, Button, Stack, Grid, Autocomplete, Chip, FormLabel, FormControl, TextareaAutosize, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import './RecipesAdd.css';
import { TagsInput } from "react-tag-input-component";

import InputTypes from '../../components/recipes/InputTypes';
import categoryList from '../../components/recipes/categoryList';
import equipmentList from '../../components/recipes/equipmentList';

import moment from 'moment';

import './RecipesAdd.css';
import { Textarea } from '@mui/joy';



const steps = ['Ogólne informacje', 'Dane', 'Składniki', 'Zdjęcie i opis', 'Przepis'];



export default function Demo() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {


    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    // alert('This may erase the changes') // add continue / stay buttons 
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  const recipeForm = useForm<InputTypes> ({
    defaultValues: {
        name: '',
        prep_time: null,
        amount: '',
        equipment: '',
        categories: [],
        description: '',
        recipe_text: '',
        photo: '',
        ratings: [ 3,],
        author: '',
        date: null, // to be hidden
        //verified
        //id
        
    }
    });


const { register, unregister, handleSubmit } = recipeForm;

const submitForm = (data: any) => {

    data.date = moment(new Date).format('DD-MM-YYYY');

    data.categories = categories;

    if (equipment){
        equipment = equipment.join(', ')
        equipment.substring(0, equipment.length - 1)
    }

    data.equipment = equipment
    console.log(data)
};


const [categories, setCategories] = useState<any[]>([])
let [equipment, setEquipment] = useState<any>([])
const [recipeTemplate, setRecipeTemplate] = useState<any>('')

const [numIngredients, setNumIngredients] = useState<any>(1)




const ingInput = (i: any) => {

    const nameLabel = 'Składnik ' + i;

    const registerName = 'ingredient' + i;

    const addIngInput = () => {
        setNumIngredients(numIngredients + 1)
    };

    const removeIngInput = () => {
        setNumIngredients(numIngredients - 1)
        unregister(`ingredient_${i}_name` as any)
        unregister(`ingredient_${i}_amount` as any)
    };

    const addIngInputOnEnter = (evt: { key: string; }) => {
        evt.key === 'Enter' && addIngInput()
    };

    return (
    <Grid className="grid-element" container item xs={12} spacing={2} key={i}>

        <Grid item xs={7}>
            <TextField label={nameLabel} type="text" onKeyDown={addIngInputOnEnter} 
            {...register(`ingredient_${i}_name` as any, { required: false })} />
        </Grid>

        <Grid item xs={4}>
            <TextField label="Ilość" type="string" onKeyDown={addIngInputOnEnter}  
            {...register(`ingredient_${i}_amount` as any, { required: false })} />
        </Grid>

        { i === numIngredients && ( 
        <Grid id="circle-icon-grid-el" item xs={1}>
            { i !== 15 && (
                <AddCircleIcon className="add-ing-input" onClick={addIngInput}/>
            )}
            { i !== 1 && (
                <RemoveCircleIcon className="remove-ing-input" onClick={removeIngInput} />
            )}
        </Grid>
        )}

        { i === 15 && (
            <Typography> 
                You can't add more than 15 ingredients, sorry! 😔 
            </Typography>
        )}

    </Grid>
    )
}


const ingRow: any = []

for (let i = 1; i <= numIngredients && i <= 15; i++){
    ingRow.push(ingInput(i))
}

const returnIngRow = () => {
    return ingRow
}




  return (
    <form id="add-recipes-form" onSubmit={handleSubmit(submitForm)} noValidate> 

        <Box style={{margin: "auto"}} sx={{ width: '350px' }}>

            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                    optional?: React.ReactNode;
                } = {};

                return (
                    <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            
            {activeStep === steps.length ? (
                null
            ) : (
                <React.Fragment>

                { activeStep === 0 && (
                    <div>

                        <Grid className="grid-element" item xs={12}>
                            <TextField label="Nazwa dania" type="text" {...register('name')} />
                        </Grid>
                        <Grid className="grid-element" item xs={12}>
                            <Autocomplete value={categories} onChange={(event, newValue) => { setCategories(newValue); }}
                                multiple id="tags-filled" options={categoryList.map((option) => option.name)} 
                                renderTags={
                                    (value: string[], getTagProps) => value.map((option: string, index: number) => (
                                    <Chip label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <div>
                                        <TextField {...params} label="Wybierz kategorie" />
                                    </div> 
                                )}
                            />
                        </ Grid>
                    </div>
                )}

                { activeStep === 1 && (
                <Grid container>

                    <Grid  item xs={12}>
                        <TextField label="Porcja na..." type="text" {...register('amount')}/>
                    </Grid>
                    <Grid  item xs={6}>
                        <TextField label="Czas przygotowania" type="number" {...register('prep_time')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" id="time-span">min.</Typography>
                    </Grid>

                    <Grid className="grid-element" item xs={12}>
                            <Autocomplete value={equipment} onChange={(event, newValue) => { setEquipment(newValue); }}
                                multiple  options={equipmentList.map((option) => option.name)} 
                                freeSolo
                                renderTags={
                                    (value: string[], getTagProps) => value.map((option: string, index: number) => (
                                    <Chip label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <div>
                                        <TextField {...params} label="Potrzebne narzędzia" />
                                    </div> 
                                )}
                            />
                    </ Grid>
                </Grid>
                )}

                { activeStep === 2 && (
                    <>
                        {returnIngRow()}
                    </>
                )}

                { activeStep === 3 && (
                    <Grid container>
                        <Grid className="grid-element" item xs={12}>
                                <FormLabel>Krótki opis:</FormLabel>
                                <TextField fullWidth multiline={true} rows={3} {...register('description')}/>
                        </Grid>
                        <Grid className="grid-element" item xs={12}>
                                <FormLabel>Zdjęcie:</FormLabel>
                                <TextField fullWidth placeholder="Wprowadź adres URL" {...register('photo')}/>
                        </Grid>
                    </Grid>
                )}

                { activeStep === 4 && (
                    <Grid container>
                        <Grid className="grid-element" item xs={12}>
                                <FormLabel>Przepis:</FormLabel>
                                <Textarea  minRows={10} maxRows={20} size="lg" defaultValue={recipeTemplate} 
                                // onClick={() => setSetRecipeTemplate()}
                                {...register('recipe_text')} placeholder="..." />
                        </Grid>
                        <Grid className="grid-element" item xs={6}>
                            <TextField label="Podpisz się :) " type="text" {...register('author')}/>
                        </Grid>
                    </Grid>
                )}


                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}> Back </Button>
                    <Box sx={{ flex: '1 1 auto' }} />

                        {activeStep + 1 === steps.length
                        ? <Button  type="submit" key={'submit-btn'}> Wyślij </Button>
                        : <Button onClick={handleNext} key={'next-btn'}>Dalej</Button> }
                </Box>
                </React.Fragment>
            )}
        </Box>
    </form>
  );
}