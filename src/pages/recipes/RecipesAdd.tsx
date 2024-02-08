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

import '@fontsource/roboto/400.css';
import Header from '../../components/Header';


// stepper set up

const steps = ['Ogólne', 'Dane', 'Składniki', 'Zdjęcie i skrót', 'Przepis'];



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

// form set up

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
        ratings: [],
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

    fetch(
        "/recipes", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)  
    })
    .then(function(response){ 
    return response.json();   
    })
    .then(function(data){ 
    console.log(JSON.stringify(data))
    });
};

const [categories, setCategories] = useState<any[]>([])
const [numIngredients, setNumIngredients] = useState<any>(4)
let [equipment, setEquipment] = useState<any>([])

// set-up of the ingredient form

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
    <Grid  container xs={12} sx={{mb: 3}} key={i}>

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
                <AddCircleIcon className="add-ing-input" onClick={addIngInput} sx={{ color: 'green' }} />
            )}
            { i !== 1 && (
                <RemoveCircleIcon className="remove-ing-input" onClick={removeIngInput}  sx={{ color: 'red' }} />
            )}
        </Grid>
        )}

        { i === 15 && (
            <Typography sx={{mt: 2}}> 
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


// the main actual page starts here

  return (
    <form id="add-recipes-form" onSubmit={handleSubmit(submitForm)} noValidate> 


        <Box style={{margin: "auto"}} sx={{ width: '350px' }}>

            {/* <Typography variant='h4' my={4}>Create a new recipe</Typography> */}
            <Header head={'Create a new recipe'} />

            <Stepper sx={{my: 4}} activeStep={activeStep}>
                {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                    optional?: React.ReactNode;
                } = {};

                return (
                    <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}> {activeStep === index && label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>

            {/* the actual form starts here */}
            
            {activeStep !== steps.length && (
                <React.Fragment>

                { activeStep === 0 && (
                    <Grid container className="form-step-wrapper">
                        <Grid item xs={12} sx={{mb: 3}}>
                            <TextField label="Nazwa potrawy" type="text" {...register('name')} />
                        </Grid>
                        <Grid  item xs={12}>
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
                    </Grid>
                )}

                { activeStep === 1 && (
                <Grid container className="form-step-wrapper">

                    <Grid item xs={12} sx={{mb: 3}}>
                        <TextField label="Porcja..." type="text"  fullWidth placeholder="np. 'dla dwóch osób' albo 'na jeden słoik'"{...register('amount')}/>
                    </Grid>
                    <Grid  item xs={6} sx={{mb: 3}}>
                        <TextField label="Czas przygotowania" type="tel" {...register('prep_time')}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" id="time-span">minut</Typography>
                    </Grid>

                    <Grid  item xs={12}>
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
                    <div className='form-step-wrapper'>
                        {returnIngRow()}
                    </div>
                )}

                { activeStep === 3 && (
                    <Grid container className="form-step-wrapper">
                        <Grid item xs={12} sx={{mb: 3}}>
                                <FormLabel>Krótki opis:</FormLabel>
                                <TextField fullWidth multiline={true} placeholder='Zareklamuj danie w kilku słowach...&#10;(przepis napiszesz na następnej stronie 😅)' rows={3} sx={{mt: 1}} {...register('description')}/>
                        </Grid>
                        <Grid  item xs={12}>
                                <FormLabel>Zdjęcie:</FormLabel>
                                <TextField fullWidth placeholder="Wprowadź adres URL" sx={{mt: 1}} {...register('photo')}/>
                        </Grid>
                    </Grid>
                )}

                { activeStep === 4 && (
                    <Grid container className="form-step-wrapper">
                        <Grid  item xs={12} sx={{mb: 3}}>
                                <FormLabel>Sposób przygotowania:</FormLabel>
                                <Textarea  minRows={10} maxRows={20} size="lg" sx={{mt: 1}} 
                                {...register('recipe_text')} placeholder="Tutaj zamieść treść przepisu!" />
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid  item xs={6}>
                            <FormLabel>Autor:</FormLabel>
                            <TextField label="Podpisz się! 😄" type="text" 
                            sx={{mt: 1}} {...register('author')}/>
                        </Grid>
                    </Grid>
                )}


                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}> Wróć </Button>
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