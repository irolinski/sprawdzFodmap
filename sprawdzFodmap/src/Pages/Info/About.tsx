
import { Grid, Paper, Typography } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import './About.css'
import Carousel from "react-material-ui-carousel";

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Slide_1 = function () {
    return(
        <div className="info-slide">
            <h2 className="info-header">Kim jesteśmy?</h2>
                <ul className="slide-text about-us-text"> SprawdźFODMAP to charytatywny projekt edukacyjny zrodzony z: 
                <li>zamiłowania do tworzenia </li>  <li>wiary w prawo każdego do dostępu dobrej jakości informacji</li> <li> głębokiej pogardy wobec bólu brzucha </li>
                </ul>   
        </ div>
    )
}

const Slide_2 = function () {
    return(
        <div className="info-slide">
            <h2 className="info-header">Nasza misja</h2>
            <ul className="slide-text">
                <li>Inicjatywa ta nie ma charakteru komercyjnego.</li>
                <li>Mamy nadzieję ułatwić Ci życie - pozwolić zarządzać swoją dietą zgodnie z aktualną wiedzą naukową.</li> 
            </ul>
        </ div>
    )
}

const Slide_3 = function () {
    return(
        <div className="info-slide">
            <h2 className="info-header">Kontakt</h2>
            <ul className="slide-text">
                <li>
                    Masz jakieś uwagi? Chcesz zgłosić błąd?
                </li>
                <li>
                    A może chcesz się odezwać i rozwijać ten (jeszcze) skromny projekt razem z nami?
                </li>
                <li>
                Pisz do nas pod adres: <a className="email-link" href="mailto:sprawdzfodmap@gmail.com">sprawdzfodmap@gmail.com</a>
                </li>
            </ul>
        </ div>
    )
}


export default function Info () {

    return(
        <div className='about-page'>
            <Navbar />
            <Grid container spacing={2}>
                <Grid xs={12} md={10} className="diet-grid">
                    {/* <h1>O nas</h1> */}
                    <Carousel height={500} animation={'slide'} duration={1600} swipe={true} cycleNavigation={false} PrevIcon={<ArrowBackOutlinedIcon />} NextIcon={<ArrowForwardOutlinedIcon />}	  >
                        <Slide_1 />
                        <Slide_2 />
                        <Slide_3 />
                    </ Carousel>
                </Grid>
            </Grid>
                    
        </ div>
    )
}