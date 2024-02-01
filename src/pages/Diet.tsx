import {CircularProgress, TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './Diet.css'
import { useEffect, useState } from "react";
import DietCard from "./DietCard";

export type productProp = {
    name: string,
    sub_title: string,
    fodmap: string,
    max_use: string,
    histamine: string,
    notes: string,
    key: string
}

export function Diet() {

    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/diet')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);



function search(arr: Array<productProp>, q: string){


    const a: Array<productProp> = [];
    (arr.map((p) => 
        (p.name && p.name.toLowerCase().includes(q.toLowerCase())
        || p.sub_title && p.sub_title.toLowerCase().includes(q.toLowerCase()))
        && a.push(p)))

    return a
}
  

    const [filteredData, setFilteredData] = useState(products)
    const [showLoading, setShowLoading] = useState(false)

    const searchData = async (evt: React.ChangeEvent<HTMLInputElement>) => {

        setShowLoading(true)

        let results = [...products]
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
                        <div>
                            {filteredData.map((p) => {
                                return( <DietCard name={p.name} sub_title={p.sub_title} fodmap={p.fodmap_mon} max_use={p.max_use} histamine={p.histamine} notes={p.notes} key={p.id} />
                                )
                            })}
                        </div>
                    }

            </Grid>
        </Grid>



    )
}   