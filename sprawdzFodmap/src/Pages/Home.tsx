import {Box, Button, Checkbox, CircularProgress, FormControlLabel, Modal, TextField } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './Home.css';
import { useEffect, useState } from "react";
import products from '../../public/db/dietDb.ts'
import DietCard from "../Components/Main/DietCard.tsx";
import Navbar from '../Components/Nav.tsx'

import doggie_animation from '../../public/animations/doggie 1.gif'

export type ProductProp = {
    name: string,
    sub_title?: string,
    fodmap: string,
    category?: string,
    max_use?: string,
    histamine?: string,
    notes?: string,
    id?: string
}

export type NavLink = {
    name: string,
    adress: string
}

export default function App() {


function search(arr: Array<ProductProp>, q: string){


    const a: Array<ProductProp> = [];
    (arr.map((p) => 
        (p.name && p.name.toLowerCase().includes(q.toLowerCase())
        || p.sub_title && p.sub_title.toLowerCase().includes(q.toLowerCase()))
        && a.push(p)))

        return a
}
  

    const [filteredData, setFilteredData] = useState<ProductProp[]>([])
    const [showLoading, setShowLoading] = useState(false)

    const searchData = async (evt: React.ChangeEvent<HTMLInputElement>) => {

        setShowLoading(true)

        let results: any[] = [...products]
        const query = evt.currentTarget.value;

        results = search(results, query);


        (query != '') ? setFilteredData(results) : setFilteredData([]);

        setTimeout (() => {setShowLoading(false)}, 400)

    }    


      const [openModal, setOpenModal] = useState(false);
      const handleOpenModal = () => {
        setOpenModal(true);
        
        setTimeout(() => {
            setdisclaimerCheckBoxOpacity(1)
        }, 2000)

        setTimeout(() => {
            setPointerEvtsModalCheckbox('')
        }, 3000)
    }
      
      const handleCloseModal = () => {
        setOpenModal(false);
        localStorage.setItem('disclaimer-seen', 'true');
      }
      const [disclaimerCheckBoxOpacity, setdisclaimerCheckBoxOpacity] = useState(0.3)
      const [pointerEvtsModalCheckbox, setPointerEvtsModalCheckbox] = useState('none')
      const [disableModalButton, setDisableModalButton] = useState(true)


    



      useEffect(() => {
        if(localStorage.getItem('disclaimer-seen') === null) {
            handleOpenModal();
        }
      })

    return(

        <div className="main-page">

            {/* <Button className="open-modal-" onClick={handleOpenModal}>Open modal</Button>  delete this in production! */}
            <Modal
            open={openModal}
            aria-labelledby=""
            aria-describedby=""
            >
                <Box className="disclaimer-modal" >
                    <img id="modal-doggie" src={doggie_animation} />
                    <h2 id="disclaimer-modal-title" className="header">
                        Dobrze Cię widzieć!
                    </h2>
                    <div id="disclaimer-modal-request-div">
                        <span id="disclaimer-modal-request">
                            Zanim przejdziesz dalej, zapoznaj się, proszę, z poniższym zastrzeżeniem:
                        </span>
                    </div>
                    <div id="disclaimer-modal-description">
                        <p >
                            Niniejsza strona zawiera informacje na temat stosowania diet, oparte na aktualnych źródłach naukowych i przeznaczona jest celom edukacyjnym. Nie jest jednak w stanie zastąpić konsultacji z profesjonalistą.
                            
                        </p>
                        <p>
                            Wszelkie kwestia diagnostyczne oraz decyzje dotyczące stosowania interwencji dietetycznych należy podejmować <b>jedynie zgodnie z zaleceniami lekarza i/lub dietetyka kliniczego</b>. 
                        </p>
  
                    </div>
                    <FormControlLabel id="modal-checkbox-label" className="modal-checkbox-label" sx={{opacity: disclaimerCheckBoxOpacity, pointerEvents: pointerEvtsModalCheckbox}}  
                    control={<Checkbox style ={{color: "#000000"}}  onClick={() => setDisableModalButton(!disableModalButton)} />} label="Potwierdzam zapoznanie się z powyższymi informacjami." />
                    <Button disabled={disableModalButton} onClick={handleCloseModal} variant="contained">Idź dalej</Button>
                </Box>
            </Modal>



            <Navbar />
            <Grid container spacing={2} className="home-grid">
                <Grid xs={12} md={10} className="diet-grid">
                    <TextField className="search-input" label="Wprowadź nazwę produktu" variant="standard" onChange={searchData} />
                </Grid>
                <Grid xs={12} className="diet-grid">
                        { showLoading && <CircularProgress id="loading" color="inherit" />  }
                        { !showLoading && 
                            <div id="card-container">
                                {
                                filteredData.map((p: ProductProp) => {
                                    return( <DietCard name={p.name} sub_title={p.sub_title} fodmap={p.fodmap} max_use={p.max_use} histamine={p.histamine} notes={p.notes} key={p.id} />
                                    )
                                })}
                            </div>
                        }
                </Grid>
            </Grid>
        </ div>
    )
}   