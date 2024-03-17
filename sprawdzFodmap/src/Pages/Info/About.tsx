
import { Grid, Tooltip, TooltipProps, tooltipClasses, styled } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import './About.css'
import Carousel from "react-material-ui-carousel";

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import Lottie from 'react-lottie-player'
import sendingMail_animation from '../../../public/animations/sending-mail.json'
import cooking_animation from '../../../public/animations/cooking.json'
import webdesigner_animation from '../../../public/animations/web-designer-with-idea.json'
import { Fragment } from "react/jsx-runtime";

export const LottieTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) =>  ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#717171',
      color: '#edeaea',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));



const Slide_1 = function () {
    return(
        <div className="info-slide">
            <h2 className="info-header">Kim jesteśmy?</h2>
                <ul className="slide-text about-us-text"> SprawdźFODMAP to charytatywny projekt edukacyjny zrodzony z: 
                <li className="li-indent">🎨 &ensp; Zamiłowania do tworzenia </li>  <li className="li-indent">👩🏼‍💻 &ensp; Wiary w prawo każdego do dostępu do dobrej jakości informacji</li> <li className="li-indent">😇 &ensp; Głębokiej pogardy wobec bólu brzucha </li>
                </ul>   
                <LottieTip title={
                        <Fragment>
                            {<div>
                                <a href="https://iconscout.com/lottie-animations/web" className="lottie-link" target="_blank">Web designer with idea</a> by <a href="https://iconscout.com/contributors/nanoagency" className="lottie-link" >nanoagency</a>
                                </div>
                                }
                        </Fragment>
                    }>
                    <div className='lottie-wrapper'>
                    <Lottie
                    className="lottie"
                    loop
                    animationData={webdesigner_animation}
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
            <h2 className="info-header">Nasza misja</h2>
            <ul className="slide-text">
                <li className="li-indent">🎗️ &ensp; Jesteśmy inicjatywą, ukierunkowaną na doraźną pomoc osobom zmagającym się z chrobami układu pokarmowego (i pokrwnych) </li>
                <li className='li-indent'>🧩 &ensp; Chcemy ułatwić Ci życie - pomóc Ci w odnalezieniu się na zaleconej diecie</li> 
                <li className='li-indent'>🧬 &ensp; Zależy nam, by promować i wdrażać w życie aktualną wiedzę naukową</li> 
            </ul>

            <LottieTip title={
                        <Fragment>
                            {<div>
                                <a href="https://iconscout.com/free-lottie-animation/cooking-6834623" className="lottie-link" target="_blank">Free Cooking Animated Illustration</a> by <a href="https://iconscout.com/contributors/devashishdeval" className="lottie-link" >Dev Ashish Deval</a> 
                                </div>
                                }
                        </Fragment>
                    }>
                    <div className='lottie-wrapper'>
                    <Lottie
                    className="lottie"
                    loop
                    animationData={cooking_animation}
                    play
                    style={{ width: 150, height: 150 }}
                    />             
                    </div>       
                    </LottieTip>
        </ div>
    )
}





const Slide_3 = function () {
    return(
        <div className="info-slide">
            <h2 className="info-header">Kontakt</h2>
            <ul className="slide-text">
                <li className="li-indent">
                    ✅ &ensp; Masz jakieś uwagi? Chcesz zgłosić błąd?
                </li>
                <li className="li-indent">
                📈 &ensp; A może chcesz się odezwać i rozwijać ten (jeszcze) skromny projekt razem z nami?
                </li>
                <li className="li-indent">
                📬 &ensp; Pisz do nas na adres: <a className="email-link" href="mailto:sprawdzfodmap@gmail.com">sprawdzfodmap@gmail.com</a>
                </li>
            </ul>

            <LottieTip title={
                        <Fragment>
                            {
                            <div>
                                <a href="https://iconscout.com/lottie-animations/sending-mail" className="lottie-link"  target="_blank">Sending Mail</a> by <a href="https://iconscout.com/contributors/bhumil-thakkar" className="lottie-link">AnEmotion Studio</a> 
                            </div>
                            }
                        </Fragment>
                    }>
                    <div className='lottie-wrapper'>
                    <Lottie
                    className="lottie"
                    loop
                    animationData={sendingMail_animation}
                    play
                    style={{ width: 150, height: 150 }}
                    />             
                    </div>       
            </LottieTip>
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
                    <Carousel autoPlay={false} height={550} animation={'slide'} duration={1600} swipe={true} stopAutoPlayOnHover={true} cycleNavigation={false} PrevIcon={<ArrowBackOutlinedIcon />} NextIcon={<ArrowForwardOutlinedIcon />}	  >
                        <Slide_1 />
                        <Slide_2 />
                        <Slide_3 />
                    </ Carousel>
                </Grid>
            </Grid>
                    
        </ div>
    )
}