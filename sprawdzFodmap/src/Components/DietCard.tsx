import './DietCard.css'

import { productProp } from '../App.tsx'
import { Paper } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { amber, green, red } from '@mui/material/colors';

import HitIcon from '../../public/icons/hit2.svg'


export default function DietCard({ name, sub_title, fodmap, max_use, histamine, notes }: productProp) {

    return(

    <Paper className='diet-card'>
        <header>
            <h3 className="title">{name}</h3> {notes && (<div className="info-icon">i</div> )} 
                <span className="sub-title">{sub_title}</span>
        </header>
        <main>
            <div className="card-row">

                <table>
                    <tr>
                        <td>
                            {fodmap === 'low' && (
                            <div className="fodmap-div">
                                    <CheckCircleIcon className="card-icon" sx={{ color: green[500] }} fontSize='large' />
                                    <div className="fodmap-logo">
                                        <span className="fmap-cat low-fmap" style={{ color: green[500] }}>Low</span> <span>FODMAP</span>
                                    </div>
                            </div>
                            )}

                            {fodmap === 'mid' && (
                                <div className="fodmap-div">
                                        <RemoveCircleIcon className="card-icon" sx={{ color: amber[500] }} fontSize='large' />
                                        <div className="fodmap-logo">
                                            <span className="fmap-cat mid-fmap" style={{ color: amber[500] }} >Mid</span> <span>FODMAP</span> 
                                        </div>
                                </div>
                            )}

                            {fodmap ==='high' && (
                                <div className="fodmap-div">
                                    <CancelIcon className="card-icon" sx={{ color: red[500] }} fontSize='large' />
                                    <div className="fodmap-logo">
                                            <span className="fmap-cat high-fmap" style={{ color: red[500] }} >High</span> <span>FODMAP</span>
                                    </div>
                                </div>
                            )}
                        </td>
                        <td>
                            {max_use && (
                                <div className="max-use-div">
                                    <RestaurantIcon />
                                        <span className="max-use">{max_use}</span>
                                </div>
                            )}
                        </td>
                        <td>
                            {histamine && (
                                <div className="histamine-div">
                                    <img className="hit-icon" src={HitIcon} />
                                    { (histamine === 'low') && <span>(20%)</span> }
                                    { (histamine === 'mid') && <span className="his-mid-span">(20-60%)</span> }
                                    { (histamine === 'high') && <span>(60%)</span> }
                                </div>
                            )}
                        </td>
                    </tr>
                </table>

            </div>

            {/* <div className="fodmap-div">
                <div className={`circle ${fodmap}-fMap`} ></div>
                <div className="fodmap-sub-div">
                    <span>Produkt <b>{fodmap}</b> FODMAP </span>
                    { max_use && <span className="max-use">(dozwolony w ilości: &lt; {max_use}) </span> }
                </div>
            </div> */}
            {/* <div className="max-use-div">
            </div> */}
            {/* {histamine && (
            <div id="histamine-div">
                <div className={`circle ${histamine}-hist`} ></div>
                <span>Ten produkt jest zakazany w

                    { (histamine === 'low') && <span> <b>niektórych (&lt;20%)</b> dietach  </span> }
                    { (histamine === 'mid') && <span> <b>wielu (20-60%)</b> dietach  </span> }
                    { (histamine === 'high') && <span> <b>większości (&gt;60%)</b> diet  </span>}
                    
                    na nietolerancję histaminy
                </span>
            </div>
            )}
            {notes && (
            <div id="notes-div">
                <h4>Dodatkowe informacje:</h4>
                <p>
                    {notes}
                </p>
            </div>
            )} */}
        </main>
    </Paper>

    )
}