import { Button, Divider } from "@mui/material";


export default function HitButtons () {
    return (

        <>
            <Button href="#table-cat-20%">🟡 20%</Button>
            <Divider />
            <Button href="#table-cat-20-60%">🟠 20-60%</Button>
            <Divider />
            <Button href="#table-cat->60%">🔴 60%</Button>
        </>
    )
}