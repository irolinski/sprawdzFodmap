import {CircularProgress, TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; 
import './App.css'
import { useState } from "react";
import products from '../public/db/dietDb.ts'
import DietCard from "./Components/DietCard";

export type productProp = {
    name: string,
    sub_title?: string,
    fodmap: string,
    category?: string,
    max_use?: string,
    histamine: any,
    notes?: string,
    id?: string,
}

export default function App() {

function search(arr: Array<productProp>, q: string){


    const a: Array<productProp> = [];
    (arr.map((p) => 
        (p.name && p.name.toLowerCase().includes(q.toLowerCase())
        || p.sub_title && p.sub_title.toLowerCase().includes(q.toLowerCase()))
        && a.push(p)))

        return a
}
  

    const [filteredData, setFilteredData] = useState<productProp[]>([])
    const [showLoading, setShowLoading] = useState(false)

    const searchData = async (evt: React.ChangeEvent<HTMLInputElement>) => {

        setShowLoading(true)

        let results: any[] = [...products]
        const query = evt.currentTarget.value;

        results = search(results, query);


        (query != '') ? setFilteredData(results) : setFilteredData([]);

        setTimeout (() => {setShowLoading(false)}, 400)

    }    

    return(

        <Grid container spacing={2}>
            <Grid xs={12} md={10} className="diet-grid">
                <TextField className="search-input" label="Wprowadź nazwę produktu" variant="standard" onChange={searchData} />
            </Grid>
            <Grid xs={12} className="diet-grid">
                    { showLoading && <CircularProgress id="loading" color="inherit" />  }
                    { !showLoading && 
                        <div id="card-container">
                            {
                            filteredData.map((p: productProp) => {
                                return( <DietCard name={p.name} sub_title={p.sub_title} fodmap={p.fodmap} max_use={p.max_use} histamine={p.histamine} notes={p.notes} key={p.id} />
                                )
                            })}
                        </div>
                    }
            </Grid>
        </Grid>
    )
}   