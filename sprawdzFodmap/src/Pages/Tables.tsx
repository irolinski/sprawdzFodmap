import { Grid } from "@mui/material";
import Navbar from '../Components/Nav.tsx'


export default function Tables() {
    return(
            <>
                <Navbar link_1={{name: 'Produkty', adress: '/'}} link_2={{name: 'Info', adress: '/info'}} />
                <Grid container spacing={2}>
                    <Grid xs={12} md={10} className="diet-grid">

                    </Grid>
                </Grid>
                        
            </>
    )
}