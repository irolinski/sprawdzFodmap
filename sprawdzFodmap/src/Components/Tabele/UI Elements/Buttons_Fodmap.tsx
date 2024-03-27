import { Divider } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
  

  export default function FodmapLinks() {


    return (
    <>
        <Link to="#table-cat-Owoce" aria-label='Owoce' >🍇 Owoce</Link>
                <Divider />
        <Link to='#table-cat-Warzywa' aria-label='Warzywa'>🥦 Warzywa</Link>
                <Divider />

        <Link to="#table-cat-Mięso" aria-label='Mięso'>🥩 Mięso</Link>
                <Divider />

        <Link to="#table-cat-Zboża" aria-label='Zboża'>🌾 Zboża </Link>
                <Divider />

        <Link to="#table-cat-Nabiał" aria-label='Nabiał'>🐄 Nabiał</Link>
                <Divider />

        <Link to="#table-cat-Orzechy" aria-label='Orzechy'>🥜 Orzechy</Link>
                <Divider />

        <Link to="#table-cat-Cukry" aria-label='Cukry'>🍬 Cukry</Link>
                <Divider />

        <Link to="#table-cat-Napoje" aria-label='Napoje'>☕️ Napoje</Link>
                <Divider />

        <Link to="#table-cat-Dodatki" aria-label='Dodatki'>🧂 Dodatki</Link>
        </ >
    )
  }