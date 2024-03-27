import { Fragment } from "react/jsx-runtime";
import { LottieTip } from "../../../../Pages/Info/About";
import Lottie from "react-lottie-player";

import sendingMail_animation from '../../../../../public/animations/sending-mail.json'



export default function Slide_3 () {
    return(
        <div className="info-slide" tabIndex={0}>
            <h2 className="info-header header">Kontakt</h2>
            <ul className="slide-text">
                <li className="li-indent">
                    <span role='img'>✅</span> &ensp; Masz jakieś uwagi? Chcesz zgłosić błąd?
                </li>
                <li className="li-indent">
                <span role='img'>📈</span> &ensp; A może chcesz się odezwać i rozwijać ten (jeszcze) skromny projekt razem z nami?
                </li>
                <li className="li-indent">
                <span role='img'>📬</span> &ensp; Pisz do nas na adres: <a className="email-link" href="mailto:sprawdzfodmap@gmail.com">sprawdzfodmap@gmail.com</a>
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