import { Typography } from "@mui/material";


export default function Header ({ head }: any) {

    return <Typography variant='h4' style={{textAlign: 'center'}} my={4}>{head}</Typography>

}