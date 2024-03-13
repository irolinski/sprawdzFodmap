
import { Grid } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import './About.css'

export default function Info () {


    return(
        <>
            <Navbar />
            <Grid container spacing={2}>
                <Grid xs={12} md={10} className="diet-grid">
                    <h1>O nas</h1>

                    <div>
                        <p>
                            SprawdzFODMAP to charytatywny projekt edukacyjny zrodzony z pasji tworzenia, bólu brzucha i wiary w prawo każdego człowieka do dostępu dobrej jakości informacji. 
                            <br />
                            Inicjatywa ta nie ma i nie będzie mieć charakteru komercyjnego. Mamy nadzieję pomóc Ci, kiedy masz dość googlowania - przy zakupach, przy gotowaniu i w chwili zwątpienia. 
                            <br />
                            Możesz się z nami skontaktować pod adresem: <a className="email-link" href="mailto:sprawdzfodmap@gmail.com">sprawdzfodmap@gmail.com</a>


                        </p>

                    </div>


                </Grid>
            </Grid>
                    
        </>
)
}