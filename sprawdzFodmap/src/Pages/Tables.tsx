import './Tables.css';

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Accordion, AccordionDetails, AccordionSummary, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Navbar from '../Components/Nav_Tables.tsx'

import products from '../../public/db/dietDb.ts'

import { ProductProp } from './Home.tsx';
import { red } from '@mui/material/colors';


import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const drawerWidth = 240;


const getCategory = function (categoryName: string) {

   return products.filter(
        (p) => p.category === categoryName)
        .sort((a, b) => {
            if (a.name < b.name)
            return - 1;
            if (a.name > b.name)
            return 1;

            return 0;
        }
    )
}

const cukry = getCategory('Cukry')
const dodatki = getCategory('Dodatki')
const mieso = getCategory('Mięso')
const nabial = getCategory('Nabiał')
const napoje = getCategory('Napoje')
const orzechy = getCategory('Orzechy')
const owoce = getCategory('Owoce')
const warzywa = getCategory('Warzywa')
const zboza = getCategory('Zboża')

const sortedProducts = [ owoce, warzywa, mieso, zboza, nabial, orzechy, cukry, napoje, dodatki ];


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function FodmapTable() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    < >

        <Navbar  open={ open } handleDrawerOpen = { handleDrawerOpen }/>
        <Grid container spacing={2}>

            <div className="button-scroll button-scroll-widescreen">
                <Button href="#table-cat-Owoce">🍇 Owoce</Button>
                <Button href="#table-cat-Warzywa">🥦 Warzywa</Button>
                <Button href="#table-cat-Mięso">🥩 Mięso</Button>
                <Button href="#table-cat-Zboża">🌾 Zboża </Button>
                <Button href="#table-cat-Nabiał">🐄 Nabiał</Button>
                <Button href="#table-cat-Orzechy">🥜 Orzechy</Button><br className="button-div-break"/>
                <Button href="#table-cat-Cukry">🍬 Cukry</Button>
                <Button href="#table-cat-Napoje">☕️ Napoje</Button>
                <Button href="#table-cat-Dodatki">🧂 Dodatki</Button>
                <Button disabled ></Button>
                <Button href="/tabele/hit" style={{ color: red[400] }} >Dieta HIT</Button>
            </div>

        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <div className="button-scroll button-scroll-drawer">
            <Button href="#table-cat-Owoce">🍇 Owoce</Button>
                <Button href="#table-cat-Warzywa">🥦 Warzywa</Button>
                <Button href="#table-cat-Mięso">🥩 Mięso</Button>
                <Button href="#table-cat-Zboża">🌾 Zboża </Button>
                <Button href="#table-cat-Nabiał">🐄 Nabiał</Button>
                <Button href="#table-cat-Orzechy">🥜 Orzechy</Button><br className="button-div-break"/>
                <Button href="#table-cat-Cukry">🍬 Cukry</Button>
                <Button href="#table-cat-Napoje">☕️ Napoje</Button>
                <Button href="#table-cat-Dodatki">🧂 Dodatki</Button>
                <Button disabled ></Button>
                <Button href="/tabele/hit" style={{ color: red[400] }} >Dieta HIT</Button>
                    </div>
            <Divider />
        </Drawer>

        <Grid xs={12} md={5} className="table-grid">
                        <h2>Tabela FODMAP</h2>
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
                        </Accordion>

                        {sortedProducts.map((category, i) => ( 
                            <div id={`table-cat-${category[0].category}`} className ="category-table" key={i}>
                                <h1 >{category[0].category}</h1>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                                        <TableHead>
                                                <TableRow>
                                                    <TableCell>Produkt</TableCell>
                                                    <TableCell align="right">Fodmap</TableCell>
                                                    <TableCell align="right">Maks. porcja</TableCell>
                                                </TableRow>
                                            </TableHead>
                                        <TableBody>
                                        {category.map((p: ProductProp) => (
                                            <TableRow
                                            key={p.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {p.name} <br />
                                                    {p.sub_title}
                                                </TableCell>
                                                <TableCell align="right">{p.fodmap}</TableCell>
                                                {p.max_use ? <TableCell align="center">{p.max_use}</TableCell> : <TableCell align="center">-</TableCell>}
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        ))}
                    </Grid>
            </Grid>
    </ >
  );
}