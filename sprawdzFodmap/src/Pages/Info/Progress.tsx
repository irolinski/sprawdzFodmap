
import { Grid } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import './Info.css'
import Carousel from "react-material-ui-carousel";

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import ProgSlide_1 from "../../Components/Info/Slides/Progress/ProgSlide_1.tsx";
import ProgSlide_2 from "../../Components/Info/Slides/Progress/ProgSlide_2.tsx";


export default function progressPage(){

    return(
        <div className='about-page'>
        <Navbar />
        <Grid container spacing={2}>
            <Grid xs={12} md={10} className="diet-grid">
                <Carousel autoPlay={false} height={500} animation={'slide'} duration={1600} swipe={true} stopAutoPlayOnHover={true} cycleNavigation={false} PrevIcon={<ArrowBackOutlinedIcon />} NextIcon={<ArrowForwardOutlinedIcon />} >
                    <ProgSlide_1 />
                    <ProgSlide_2 />
                </ Carousel>
            </Grid>
        </Grid>
                
    </ div>
    )

}