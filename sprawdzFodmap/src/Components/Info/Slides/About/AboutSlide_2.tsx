import { Fragment } from "react/jsx-runtime";
import { LottieTip } from "../../../../Pages/Info/About";
import Lottie from "react-lottie-player";

import cooking_animation from '../../../../../public/animations/cooking.json'



export default function Slide_2 () {
    return(
        <div className="info-slide" tabIndex={0}>
            <h2 className="info-header header">Nasza misja</h2>
            <ul className="slide-text">
                <li className="li-indent"><span role='img'>🎗️</span> &ensp; Jesteśmy inicjatywą, ukierunkowaną na doraźną pomoc osobom zmagającym się z chrobami układu pokarmowego (i pokrwnych) </li>
                <li className='li-indent'><span role='img'>🧩</span> &ensp; Chcemy ułatwić Ci życie - pomóc Ci w odnalezieniu się na zaleconej diecie</li> 
                <li className='li-indent'><span role='img'>🧬</span> &ensp; Zależy nam, by promować i wdrażać w życie aktualną wiedzę naukową</li> 
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
