import {CircularProgress, TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './Diet.css'
import { useEffect, useState } from "react";
import Results from "./Results";
import DietCard from "./DietCard";

// const fruitData: string[] = ["Apple", "Orange", "Banana"];

function search(arr: string[], q: string){
    return arr.filter((i) => i.toLowerCase().includes(q.toLowerCase()));
}


export function Diet() {

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/diet')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    // console.log(products)

  

    // const [filteredData, setFilteredData] = useState(fruitData)
    // const [showLoading, setShowLoading] = useState(false)

    // const searchData = async (evt: React.ChangeEvent<HTMLInputElement>) => {

    //     setShowLoading(true)

    //     const query = evt.currentTarget.value;
    //     let results = [...fruitData]
    //     results = search(results, query)
    //     setFilteredData(results)

    //     setTimeout (() => {setShowLoading(false)}, 400)


    // }    


    return(

        <Grid container spacing={2}>
            <Grid xs={12} md={10} className="diet-grid">
                {/* <TextField className="search-input" label="Wprowadź nazwę produktu" variant="standard" onChange={searchData} /> */}
            </Grid>
            <Grid xs={12} className="diet-grid">
                    {/* { showLoading ? <CircularProgress id="loading" color="inherit" /> : <Results data={filteredData} /> } */}
                    <div>
            {products.map((p) => {
                return( <DietCard name={p.name} sub_title={p.sub_title} fodmap={p.fodmap_mon} max_use={p.max_use} histamine={p.histamine} notes={p.notes} />
                )
            })}
    </div>
        
            </Grid>
        </Grid>



    )
}   