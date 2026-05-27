import { Fragment } from "react/jsx-runtime";
import { LottieTip } from "../../../../Pages/Info/About";
import Lottie from "react-lottie-player";

import team_animation from "../../../../../public/animations/creative-team.json";

export default function Slide_2() {
  return (
    <div className="info-slide" tabIndex={0}>
      <h2 className="info-header">Lubisz pomagać?</h2>
      <ul className="slide-text">
        <li className="li-indent">
          ✅ &ensp; Masz koncepcję co moglibyśmy dodać na stronę?
        </li>
        <li className="li-indent">
          📈 &ensp; A może chcesz dołączyć do nas i stworzyć coś wspólnie?
        </li>
        <li className="li-indent">
          📬 &ensp; Możesz odezwać się do nas na adres:{" "}
          <a
            className="email-link"
            aria-label="hiperłącze - wyślij mail"
            href="mailto:sprawdzfodmap@gmail.com"
          >
            sprawdzfodmap@gmail.com
          </a>
        </li>
      </ul>
      <LottieTip
        title={
          <Fragment>
            {
              <div>
                <a
                  href="https://iconscout.com/lottie-animations/creative-team"
                  className="lottie-link"
                  target="_blank"
                >
                  Creative Team
                </a>{" "}
                by{" "}
                <a
                  href="https://iconscout.com/contributors/boltbite"
                  className="lottie-link"
                >
                  BoltBite
                </a>
              </div>
            }
          </Fragment>
        }
      >
        <div className="lottie-wrapper">
          <Lottie
            className="lottie"
            loop
            animationData={team_animation}
            play
            style={{ width: 150, height: 150 }}
          />
        </div>
      </LottieTip>
    </div>
  );
}
