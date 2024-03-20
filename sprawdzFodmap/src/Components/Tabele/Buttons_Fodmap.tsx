import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

  
  export default function FodmapButtons() {

    return (
    <>
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
        <Button href="/tabele/hit" style={{ color: red[400] }}  >Dieta HIT</Button>
    </ >
    )
  }