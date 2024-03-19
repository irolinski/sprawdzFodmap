
import { Grid } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import './About.css'
import Carousel from "react-material-ui-carousel";

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import Lottie from 'react-lottie-player'
import team_animation from '../../../public/animations/creative-team.json'
import plant_animation from '../../../public/animations/plant.json'

import { LottieTip } from "./About.tsx";
import { Fragment } from "react/jsx-runtime";


export default function progressPage(){

    const Slide_1 = function () {
        return(
            <div className="info-slide">
                <h2 className="info-header">Nadzieja na przyszłość</h2>
                    <ul className="slide-text about-us-text">
                    <li className="li-no-indent"> SprawdźFODMAP to inicjatywa, którą zamierzamy rozwijać zgodnie z zapotrzebowaniem - nasze pomysły na przyszłość to wprowadzenie m.in.: </li>
                    <li className="li-indent">🥒 &ensp; Kolejnych diet </li>  <li className="li-indent">🧘🏽‍♀️ &ensp; Interwencji autoterapeutycznych dla osób cierpiących na IBS (w tym materiałów audiowizualnych)</li> <li className="li-indent">🥗 &ensp; Bazy przepisów </li> 
                    
                    <LottieTip title={
                        <Fragment>
                            {<div>
                                <span> <b>Tracker</b> to taka aplikacja, która <b>śledzi samopoczucie</b> i natężenie objawów, tak by można było nadzorować <b>postęp terapeutyczny</b> i <b>asystuje w prowadzeniu diety</b> - pomaga znajdywać triggery i nietolerancje</span>
                            </div>
                            }
                        </Fragment>
                    }>
                        <li className="li-indent">📊 &ensp; <span className="ibs-tracker-span">IBS Trackera</span></li>
                    </LottieTip>
                    
                    </ul> 

                    <LottieTip title={
                        <Fragment>
                            {<div>
                                <a href="https://iconscout.com/lottie-animations/plant" className="lottie-link"  target="_blank">Plant</a> by <a href="https://iconscout.com/contributors/danimotion"className="lottie-link" >Daniel Rivera García</a>
                                </div>
                                }
                        </Fragment>
                    }>
                        <div className='lottie-wrapper'>
                            <Lottie
                            className="lottie"
                            loop={false}
                            animationData={plant_animation}
                            play
                            style={{ width: 150, height: 150 }}
                            />             
                        </div>       
                    </LottieTip>
            </ div>
        )
    } 

    const Slide_2 = function () {
        return(
            <div className="info-slide">
                <h2 className="info-header">Lubisz pomagać?</h2>
                <ul className="slide-text">
                    <li className="li-indent">
                        ✅ &ensp; Masz koncepcję co moglibyśmy dodać na stronę?
                    </li>
                    <li className="li-indent">
                        📈 &ensp; A może chcesz dołączyć do nas i stworzyć coś wspólnie?
                    </li>
                    <li className="li-indent">
                        📬 &ensp; Możesz odezwać się do nas na adres: <a className="email-link" href="mailto:sprawdzfodmap@gmail.com">sprawdzfodmap@gmail.com</a>
                    </li>
                </ul>
                <LottieTip title={
                        <Fragment>
                            {<div>
                                <a href="https://iconscout.com/lottie-animations/creative-team" className="lottie-link"  target="_blank">Creative Team</a> by <a href="https://iconscout.com/contributors/boltbite" className="lottie-link">BoltBite</a> 
                                </div>
                                }
                        </Fragment>
                    }>
                    <div className='lottie-wrapper'>
                        <Lottie
                        className="lottie"
                        loop
                        animationData={team_animation}
                        play
                        style={{ width: 150, height: 150 }}
                        />             
                    </div>       
                    </LottieTip>
            </ div>
        )
    }

    return(
        <div className='about-page'>
        <Navbar />
        <Grid container spacing={2}>
            <Grid xs={12} md={10} className="diet-grid">
                <Carousel autoPlay={false} height={500} animation={'slide'} duration={1600} swipe={true} stopAutoPlayOnHover={true} cycleNavigation={false} PrevIcon={<ArrowBackOutlinedIcon />} NextIcon={<ArrowForwardOutlinedIcon />}	  >
                    <Slide_1 />
                    <Slide_2 />

                </ Carousel>
            </Grid>
        </Grid>
                
    </ div>
    )

}