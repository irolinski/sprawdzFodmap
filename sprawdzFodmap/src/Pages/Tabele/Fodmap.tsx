import Grid from '@mui/material/Unstable_Grid2'; 
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import { ProductProp } from '../Home.tsx';
import FodmapButtons from '../../Components/Tabele/UI Elements/Buttons_Fodmap.tsx'
import { useState } from 'react';
import { sortedByFodmap } from  '../../Components/Tabele/productsSorted.ts';
import TableDrawer from '../../Components/Tabele/UI Elements/Drawer.tsx';

import './Tabele.css';
import TableAccordion from '../../Components/Tabele/UI Elements/Accordion_Tables.tsx';
import { FodmapTableAccordionContent_1, FodmapTableAccordionContent_2 }from '../../Components/Tabele/Text/FodmapTableAccordionContent.tsx';


 
export default function FodmapTable() {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const catEmojis = ['🍇', '🥦', '🥩', '🌾', '🐄', '🥜', '🍬', '☕️ ', '🧂'];


  return (
    <div className="table-page">
        <Navbar  open={ open } handleDrawerOpen={ handleDrawerOpen }/>
        <Grid container spacing={2}>
            <div className="button-scroll button-scroll-widescreen" aria-label="idź do grupy produktów" tabIndex={0}>
                <FodmapButtons />
            </div>
            <TableDrawer open={ open } handleDrawerOpen={ handleDrawerOpen } handleDrawerClose={ handleDrawerClose } Content={ FodmapButtons }  />
            <Grid xs={12} md={5} className="table-grid">
                            <h1 className="table-header-main header">Dieta Low FODMAP</h1>
                            <div className="table-info-div" tabIndex={0} aria-label='panel informacji'>
                                <TableAccordion Title={'O co chodzi z dietą low FODMAP?'} Content={ <FodmapTableAccordionContent_1 /> } />
                                <TableAccordion Title={'Skąd mamy te informacje?'} Content={ <FodmapTableAccordionContent_2 /> }  aria-label="źródła" />
                            </div>
                            {sortedByFodmap.map((category, i) => ( 
                                <div id={`table-cat-${category[0].category}`} className ="category-table" key={i} aria-label={`Tabela zawartości fodmap w grupie produktów: ${category[0].category}`} tabIndex={0}>
                                    <h1 className="header" ><span role='img'>{`${catEmojis[i]}`}</span> &nbsp;{`${category[0].category}`}</h1>
                                    <TableContainer component={Paper} >
                                        <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                        <colgroup>
                                            <col style={{width:'20%'}}/>
                                            <col style={{width:'10%'}}/>
                                            <col style={{width:'10%'}}/>
                                        </colgroup>
                                            <TableHead>
                                                    <TableRow>
                                                        <TableCell>Produkt</TableCell>
                                                        <TableCell align="center">Fodmap</TableCell>
                                                        <TableCell align="center">Maks. porcja</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                            <TableBody>
                                            {category.map((p: ProductProp) => (
                                                <TableRow
                                                key={p.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell scope="row" className="product-table-div">
                                                        <span className="table-product-name"><b>{p.name}</b></span> <br />
                                                        {p.sub_title}
                                                    </TableCell>
                                                    <TableCell align="right" className={`fodmap-table-cell ${p.fodmap}-fodmap-table-cell`}>
                                                        <div className='fodmap-table-div'><span>{p.fodmap}</span></div>
                                                    </TableCell>
                                                    {p.max_use 
                                                        ? 
                                                        <TableCell align="center" className='max_use-table-div'>{p.max_use}</TableCell> 
                                                        : 
                                                        <TableCell align="center" className='max_use-table-div'>-</TableCell>
                                                    }
                                                </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                        ))}
            </Grid>
        </Grid>
    </ div>
  );
}