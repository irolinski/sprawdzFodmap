import { Button } from "@mui/material";
import { red } from "@mui/material/colors";


export default function HitButtons () {
    return (

        <>
            <Button href="#table-cat-20%">🟡 20%</Button>
            <Button href="#table-cat-20-60%">🟠 20-60%</Button>
            <Button href="#table-cat->60%">🔴 60%</Button>
            <Button disabled ></Button>
            <Button href="/tabele/fodmap" style={{color: red[400] }}>Tabela FODMAP</Button>
        </>
    )
}