import './Tables.css';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Navbar from '../Components/Nav.tsx'

import products from '../../public/db/dietDb.ts'

import { ProductProp } from './Home.tsx';
import { red } from '@mui/material/colors';


const getHistamineTier = function (tier: string) {

    return products.filter(
         (p) => p.histamine === tier)
         .sort((a, b) => {
             if (a.name < b.name)
             return - 1;
             if (a.name > b.name)
             return 1;
 
             return 0;
         }
     )
 }

 const lowTier = getHistamineTier('20%');
 const midTier = getHistamineTier('20-60%');
 const highTier = getHistamineTier('>60%');

 const sortedByHistamine = [ lowTier, midTier, highTier ];

 console.log(sortedByHistamine)
 export default function HIT_Chart() {
    return(
        <>
            <Navbar />

           
            <Grid container spacing={2}>
                <div className="button-scroll">
                        <Button href="#table-cat-20%">20%</Button>
                        <Button href="#table-cat-20-60%">20-60%</Button>
                        <Button href="#table-cat->60%">60%</Button>

                        <Button disabled ></Button>
                        <Button href="/tabele/fodmap" style={{color: red[400] }}>Tabela FODMAP</Button>
                </div>

                <Grid xs={12} md={5} className="table-grid">
                <h2>Tabela diet przeciwhistaminowych</h2>
                <Accordion className="table-accordion">
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    O co z tym chodzi?
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>                    {sortedByHistamine.map((group, i) => ( 
                        <div id={`table-cat-${group[0].histamine}`} className ="category-table" key={i}>
                            <h1 >{group[0].histamine}</h1>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                    <TableHead>
                                            <TableRow>
                                                <TableCell>Produkt</TableCell>
                                                <TableCell>Kategoria FODMAP</TableCell>
                                            </TableRow>
                                        </TableHead>
                                    <TableBody>
                                    {group.map((p: ProductProp) => (
                                        <TableRow
                                        key={p.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {p.name} <br />
                                                {p.sub_title}
                                            </TableCell>
                                            <TableCell>
                                                {p.fodmap}
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
        </>
    )
}