import './DietCard.css'

import { ProductProp } from '../../Pages/Home.tsx'
import { Paper, Tooltip, TooltipProps, tooltipClasses } from '@mui/material'


import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { amber, green, red } from '@mui/material/colors';

import HitIcon from '/public/icons/hit2.svg'
import { styled } from '@mui/material/styles';
import { Fragment } from 'react/jsx-runtime';

const ElementTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }}  />
  ))(({ theme }) =>  ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgba(0,0,0,.5)',
      color: '#fff',
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
  }));

  const InfoTip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) =>  ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgba(0,0,0,.5)',
      color: '#fff',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));


export default function DietCard({ name, sub_title, fodmap, max_use, histamine, notes }: ProductProp) {

    return(

    <Paper className='diet-card' tabIndex={0}>
        <header>
            <h3 className="title">{name}</h3> 
                {notes && (
                    <InfoTip title={
                        <Fragment>
                            {<span>
                                {notes}
                            </span>}
                        </Fragment>
                    }>
                        <div className="info-icon">i</div> 
                    </InfoTip>
                )} 
                <span className="sub-title">{sub_title}</span>
        </header>
        <main>
            <div className="card-row">
                <table>
                    <tr>
                        <div className='card-fodmap-data'>
                            <td>
                                {fodmap === 'low' && (
                                    <ElementTip title={
                                        <Fragment>
                                            {<span>Produkt o <b style={{ color: green[500] }}>niskiej zawartości</b> FODMAPów - dozwolony na diecie low FODMAP</span>}
                                        </Fragment>
                                    }>
                                        <div className="fodmap-div">
                                                <CheckCircleIcon className="card-icon" sx={{ color: green[500] }} fontSize='large' />
                                                <div className="fodmap-logo">
                                                    <span className="fmap-cat low-fmap" style={{ color: green[500] }}>Low</span> <span>FODMAP</span>
                                                </div>
                                        </div>
                                    </ElementTip>
                                )}

                                {fodmap === 'mid' && (
                                    <ElementTip title={
                                        <Fragment>
                                            {<span>Produkt o <b style={{ color: amber[500] }}>średniej zawartości</b> FODMAPów  - dozwolony na diecie moderate FODMAP</span>}
                                        </Fragment>
                                    }>
                                        <div className="fodmap-div">
                                                <RemoveCircleIcon className="card-icon" sx={{ color: amber[500] }} fontSize='large' />
                                                <div className="fodmap-logo">
                                                    <span className="fmap-cat mid-fmap" style={{ color: amber[500] }} >Mid</span> <span>FODMAP</span> 
                                                </div>
                                        </div>
                                    </ElementTip>
                                )}

                                {fodmap ==='high' && (
                                    <ElementTip title={
                                        <Fragment>
                                            {<span>Produkt o <b style={{ color: red[500] }}>wysokiej zawartości</b> FODMAPów - niewskazany w czasie trwania diety</span>}
                                        </Fragment>
                                    }>
                                        <div className="fodmap-div">
                                            <CancelIcon className="card-icon" sx={{ color: red[500] }} fontSize='large' />
                                            <div className="fodmap-logo">
                                                    <span className="fmap-cat high-fmap" style={{ color: red[500] }} >High</span> <span>FODMAP</span>
                                            </div>
                                        </div>
                                    </ElementTip>
                                )}
                            </td>
                            <td>
                                {max_use && (
                                    <ElementTip title={
                                        <Fragment>
                                            {'Maksymalna dzienna porcja tego produktu na diecie lowFodmap'}
                                        </Fragment>
                                    }>
                                        <div className="max-use-div">
                                            <RestaurantIcon color="action"/>
                                            <span className="max-use">{max_use}</span>
                                        </div>
                                    </ElementTip>
                                )}
                            </td>
                        </div>
                        <td>
                            {histamine && (
                                    <ElementTip title={
                                        <Fragment>
                                            { histamine == '>60%'  &&  <span>Produkt <b>zakazany w większości diet</b> stosowanych przy Nietolerancji Histaminy</span> }
                                            { histamine == '20-60%' && <span>Produkt <b>zakazany w istotnej części diet</b> stosowanych przy Nietolerancji Histaminy</span> }
                                            { histamine == '20%' && <span>Produkt <b>zakazany w niektórych dietach</b> stosowanych przy Nietolerancji Histaminy</span> }
                                        </Fragment>
                                    }>
                                        <div className="histamine-div">
                                                <img className="hit-icon" src={HitIcon} />
                                                { histamine !== '20-60%' ? <span className="histamine-non-mid-nums">({histamine})</span> : <span className="histamine-mid-nums">({histamine})</span> }
                                        </div>
                                    </ElementTip>
                            )}
                        </td>
                    </tr>
                </table>
            </div>
        </main>
    </Paper>

    )
}