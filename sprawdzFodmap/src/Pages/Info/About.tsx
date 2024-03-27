
import { Grid, Tooltip, TooltipProps, tooltipClasses, styled } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import './Info.css'
import Carousel from "react-material-ui-carousel";

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


import AboutSlide_1 from "../../Components/Info/Slides/About/AboutSlide_1.tsx";
import AboutSlide_2 from "../../Components/Info/Slides/About/AboutSlide_2.tsx";
import AboutSlide_3 from "../../Components/Info/Slides/About/AboutSlide_3.tsx";


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


export default function Info () {

    return(
        <div className='about-page'>
            <Navbar />
            <Grid container spacing={2}>
                <Grid xs={12} md={10} className="diet-grid">
                    <Carousel autoPlay={false} height={550} animation={'slide'} duration={1600} swipe={true} stopAutoPlayOnHover={true} cycleNavigation={false} PrevIcon={<ArrowBackOutlinedIcon />} NextIcon={<ArrowForwardOutlinedIcon />}	  >
                        <AboutSlide_1 />
                        <AboutSlide_2 />
                        <AboutSlide_3 />
                    </ Carousel>
                </Grid>
            </Grid>
                    
        </ div>
    )
}