import { Fragment } from "react/jsx-runtime";
import { LottieTip } from "../../../../Pages/Info/About";
import Lottie from "react-lottie-player";

import webdesigner_animation from "../../../../../public/animations/web-designer-with-idea.json";

export default function Slide_1() {
  return (
    <div className="info-slide" tabIndex={0}>
      <h2 className="info-header header">Kim jesteśmy?</h2>
      <ul className="slide-text about-us-text">
        {" "}
        SprawdźFODMAP to charytatywny projekt edukacyjny zrodzony z:
        <li className="li-indent">
          <span role="img">🎨</span> &ensp; Zamiłowania do tworzenia{" "}
        </li>
        <li className="li-indent">
          <span role="img">👩🏼‍💻</span> &ensp; Wiary w prawo każdego do dostępu do
          dobrej jakości informacji
        </li>
        <li className="li-indent">
          <span role="img">😇</span> &ensp; Głębokiej pogardy wobec bólu
          brzucha{" "}
        </li>
      </ul>
      <LottieTip
        title={
          <Fragment>
            {
              <div>
                <a
                  href="https://iconscout.com/lottie-animations/web"
                  className="lottie-link"
                  target="_blank"
                >
                  Web designer with idea
                </a>{" "}
                by{" "}
                <a
                  href="https://iconscout.com/contributors/nanoagency"
                  className="lottie-link"
                >
                  nanoagency
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
            animationData={webdesigner_animation}
            play
            style={{ width: 150, height: 150 }}
          />
        </div>
      </LottieTip>
    </div>
  );
}
