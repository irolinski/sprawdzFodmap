
import { Grid } from "@mui/material";
import Navbar from '../Components/Nav.tsx'

export default function Info () {


    return(
        <>
            <Navbar link_1={{name: 'Szukaj', adress: '/'}} link_2={{name: 'Tabele', adress: '/tabele'}} />
            <Grid container spacing={2}>
                <Grid xs={12} md={10} className="diet-grid">

                </Grid>
            </Grid>
                    
        </>
)
}