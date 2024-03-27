

import './Tabele.css';

import Grid from '@mui/material/Unstable_Grid2';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Navbar from '../../Components/Nav.tsx'
import { sortedByHistamine } from '../../Components/Tabele/productsSorted.ts';
import { ProductProp } from '../Home.tsx';
import { useState } from 'react';
import HitButtons from '../../Components/Tabele/UI Elements/Buttons_HIT.tsx';
import TableDrawer from '../../Components/Tabele/UI Elements/Drawer.tsx';
import TableAccordion from '../../Components/Tabele/UI Elements/Accordion_Tables.tsx';
import { HitTableAccordionContent_1, HitTableAccordionContent_2, HitTableAccordionContent_3, HitTableAccordionContent_4 } from '../../Components/Tabele/Text/HitTableAccordionContent.tsx';



export default function HitTable() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const catEmojis = ['🟡', '🟠', '🔴']

  return (
    <div className="table-page">
        <Navbar  open={ open } handleDrawerOpen = { handleDrawerOpen }/>
        <Grid container spacing={2}>
             <div className="button-scroll button-scroll-widescreen">
                <HitButtons />
            </div>
            
            <TableDrawer open={ open } handleDrawerOpen={ handleDrawerOpen } handleDrawerClose={ handleDrawerClose } Content={ HitButtons }  />
            <Grid xs={12} md={5} className="table-grid">
                    <h1 className="table-header-main header">Diety przeciwhistaminowe*</h1>
                    <div className="table-info-div">
                        <TableAccordion Title={'Czym jest nietolerancja histaminy?'} Content={ <HitTableAccordionContent_1 /> } />
                        <TableAccordion Title={'*O co chodzi z dietami na HIT?'} Content={<HitTableAccordionContent_2 />} />
                        <TableAccordion Title={<b>Jak rozumieć zawartość tej tabeli?</b>} Content={<HitTableAccordionContent_3 />} />
                        <TableAccordion Title={'Skąd mamy te informacje?'} Content={<HitTableAccordionContent_4 />} />
                    </div>



                {sortedByHistamine.map((group, i) => ( 
                    <div id={`table-cat-${group[0].histamine}`} className ="category-table" key={i}>
                                <h1 className="header">{`${catEmojis[i]}   ${group[0].histamine}`}</h1>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                        <TableHead>
                                                <TableRow>
                                                    <TableCell>Produkt</TableCell>
                                                </TableRow>
                                            </TableHead>
                                        <TableBody>
                                {group.map((p: ProductProp) => (
                                <TableRow
                                key={p.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell scope="row">
                                        <span className="table-product-name"><b>{p.name}</b></span> <br />
                                        {p.sub_title}
                                    </TableCell>
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