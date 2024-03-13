

import './Tables.css';

import Grid from '@mui/material/Unstable_Grid2';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import { sortedByHistamine } from '../../Components/productsSorted.ts';
import { ProductProp } from '../Home.tsx';
import { useState } from 'react';
import HitButtons from '../../Components/Tabele/Buttons_HIT.tsx';
import TableDrawer from '../../Components/Tabele/Drawer.tsx';
import TableAccordion from '../../Components/Tabele/Accordion_Tables.tsx';
import { HitTableAccordionContent_1, HitTableAccordionContent_2, HitTableAccordionContent_3, HitTableAccordionContent_4 } from '../../Components/Tabele/Text/HitTableAccordionContent.tsx';



export default function HitTable() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="table-page">
        <Navbar  open={ open } handleDrawerOpen = { handleDrawerOpen }/>
        <Grid container spacing={2}>
             <div className="button-scroll button-scroll-widescreen">
                <HitButtons />
            </div>
            
            <TableDrawer open={ open } handleDrawerOpen={ handleDrawerOpen } handleDrawerClose={ handleDrawerClose } Content={ HitButtons }  />
            <Grid xs={12} md={5} className="table-grid">
                    <h1>Diety przeciwhistaminowe*</h1>
                <TableAccordion Title={'Czym jest nietolerancja histaminy?'} Content={ <HitTableAccordionContent_1 /> } />
                <TableAccordion Title={'*O co chodzi z dietami na HIT?'} Content={<HitTableAccordionContent_2 />} />
                <TableAccordion Title={<b>Jak rozumieć zawartość tej tabeli?</b>} Content={<HitTableAccordionContent_3 />} />
                <TableAccordion Title={'Skąd mamy te informacje?'} Content={<HitTableAccordionContent_4 />} />



                {sortedByHistamine.map((group, i) => ( 
                    <div id={`table-cat-${group[0].histamine}`} className ="category-table" key={i}>
                                <h1 >{group[0].histamine}</h1>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                        <TableHead>
                                                <TableRow>
                                                    <TableCell>Produkt</TableCell>
                                                    {/* <TableCell>Kategoria FODMAP</TableCell> */}
                                                </TableRow>
                                            </TableHead>
                                        <TableBody>
                                {group.map((p: ProductProp) => (
                                <TableRow
                                key={p.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell scope="row">
                                        <b>{p.name}</b> <br />
                                        {p.sub_title}
                                    </TableCell>
                                    {/* <TableCell>
                                        {p.fodmap}
                                    </TableCell> */}
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