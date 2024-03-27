import { Divider } from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
  

  export default function FodmapLinks() {

        // const { OwoceRef, WarzywaRef, MięsoRef,ZbożaRef, NabiałRef, OrzechyRef, CukryRef, DodatkiRef, NapojeRef } = ref

    return (
    <>
        <Link to="#table-cat-Owoce">🍇 Owoce</Link>
                <Divider />
        <Link to='#table-cat-Warzywa'>🥦 Warzywa</Link>
                <Divider />

        <Link to="#table-cat-Mięso">🥩 Mięso</Link>
                <Divider />

        <Link to="#table-cat-Zboża">🌾 Zboża </Link>
                <Divider />

        <Link to="#table-cat-Nabiał">🐄 Nabiał</Link>
                <Divider />

        <Link to="#table-cat-Orzechy">🥜 Orzechy</Link>
                <Divider />

        <Link to="#table-cat-Cukry">🍬 Cukry</Link>
                <Divider />

        <Link to="#table-cat-Napoje">☕️ Napoje</Link>
                <Divider />

        <Link to="#table-cat-Dodatki">🧂 Dodatki</Link>
        </ >
    )
  }