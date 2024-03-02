import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { NavLink } from '../Pages/Home';
import { Link } from '@mui/material';

type LinkProps = {
 link_1 : NavLink
 link_2 : NavLink
}

export default function ButtonAppBar({ link_1, link_2 }: LinkProps ) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Link className="page-brand" font-weight="800" href="/">
                SprawdźFODMAP
            </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button style={{ color: grey[500] }}  href={link_1.adress}>{link_1.name}</Button>
          <Button style={{ color: grey[500] }}  href={link_2.adress}>{link_2.name}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}