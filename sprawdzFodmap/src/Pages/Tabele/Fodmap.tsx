import Grid from '@mui/material/Unstable_Grid2'; 
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import { ProductProp } from '../Home.tsx';
import FodmapButtons from '../../Components/Tabele/Buttons_Fodmap.tsx'
import { useState } from 'react';
import { sortedByFodmap } from  '../../Components/productsSorted.ts';
import TableDrawer from '../../Components/Tabele/Drawer.tsx';

import './Tables.css';
import TableAccordion from '../../Components/Tabele/Accordion_Tables.tsx';
import { FodmapTableAccordionContent_1, FodmapTableAccordionContent_2 }from '../../Components/Tabele/Text/FodmapTableAccordionContent.tsx';


 
export default function FodmapTable() {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="table-page">
        <Navbar  open={ open } handleDrawerOpen={ handleDrawerOpen }/>
        <Grid container spacing={2}>
            <div className="button-scroll button-scroll-widescreen">
                <FodmapButtons />
            </div>
            <TableDrawer open={ open } handleDrawerOpen={ handleDrawerOpen } handleDrawerClose={ handleDrawerClose } Content={ FodmapButtons }  />
            <Grid xs={12} md={5} className="table-grid">
                            <h1>Tabela FODMAP</h1>
                            <TableAccordion Title={'O co chodzi z dietą low FODMAP?'} Content={ <FodmapTableAccordionContent_1 /> } />
                            <TableAccordion Title={'Skąd mamy te informacje?'} Content={ <FodmapTableAccordionContent_2 /> } />

                            {sortedByFodmap.map((category, i) => ( 
                                <div id={`table-cat-${category[0].category}`} className ="category-table" key={i}>
                                    <h1 >{category[0].category}</h1>
                                    <TableContainer component={Paper}>
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
                                                        <b>{p.name}</b> <br />
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