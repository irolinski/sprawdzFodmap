import { Divider } from "@mui/material";

import { HashLink as Link } from 'react-router-hash-link';


export default function HitLinks () {
    return (

        <>
            <Link to="#table-cat-20%">🟡 20%</Link>
            <Divider />
            <Link to="#table-cat-20-60%">🟠 20-60%</Link>
            <Divider />
            <Link to="#table-cat->60%">🔴 60%</Link>
        </>
    )
}