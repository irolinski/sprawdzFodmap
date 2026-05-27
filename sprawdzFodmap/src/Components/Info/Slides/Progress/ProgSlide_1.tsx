import { Fragment } from "react/jsx-runtime";
import { LottieTip } from "../../../../Pages/Info/About";
import Lottie from "react-lottie-player";

import plant_animation from "../../../../../public/animations/plant.json";

export default function Slide_1() {
  return (
    <div className="info-slide" tabIndex={0}>
      <h2 className="info-header">Nadzieja na przyszłość</h2>
      <ul className="slide-text about-us-text">
        <li className="li-no-indent">
          {" "}
          SprawdźFODMAP to inicjatywa, którą zamierzamy rozwijać zgodnie z
          zapotrzebowaniem... <br /> <br />
          ... a nasze pomysły na przyszłość to m.in.:{" "}
        </li>
        <li className="li-indent">🥒 &ensp; Kolejne diety</li>{" "}
        <li className="li-indent">
          🧘🏽‍♀️ &ensp; Interwencje autoterapeutyczne (w tym materiały
          audiowizualne)
        </li>{" "}
        <li className="li-indent">🥗 &ensp; Baza przepisów </li>
        <LottieTip
          title={
            <Fragment>
              {
                <div>
                  <span>
                    {" "}
                    <b>Tracker</b> to taka aplikacja, która{" "}
                    <b>śledzi samopoczucie</b> i natężenie objawów, tak by można
                    było nadzorować <b>postęp terapeutyczny</b> i{" "}
                    <b>asystuje w prowadzeniu diety</b> - pomaga znajdywać
                    triggery i nietolerancje
                  </span>
                </div>
              }
            </Fragment>
          }
        >
          <li className="li-indent">
            📊 &ensp;{" "}
            <span className="ibs-tracker-span">Gut Health Tracker</span>
          </li>
        </LottieTip>
      </ul>

      <LottieTip
        title={
          <Fragment>
            {
              <div>
                <a
                  href="https://iconscout.com/lottie-animations/plant"
                  className="lottie-link"
                  target="_blank"
                >
                  Plant
                </a>{" "}
                by{" "}
                <a
                  href="https://iconscout.com/contributors/danimotion"
                  className="lottie-link"
                >
                  Daniel Rivera García
                </a>
              </div>
            }
          </Fragment>
        }
      >
        <div className="lottie-wrapper" id="lottie-plant">
          <Lottie
            className="lottie"
            loop={false}
            animationData={plant_animation}
            play
            style={{ width: 150, height: 150 }}
          />
        </div>
      </LottieTip>
    </div>
  );
}
