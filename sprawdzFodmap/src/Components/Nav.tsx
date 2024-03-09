import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { Link, Menu, MenuItem, Fade } from '@mui/material';

import { useState } from 'react';

// type LinkProps = {
//  link_1: NavLink;
//  link_2: NavLink;
// }



export default function ButtonAppBar() {

  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const openDropdown1 = Boolean(anchorEl1);
  const handleClickDropdown1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloseDropdown1= () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const openDropdown2 = Boolean(anchorEl2);
  const handleClickDropdown2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseDropdown2= () => {
    setAnchorEl2(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Link className="page-brand" font-weight="800" href="/">
                SprawdźFODMAP
          </Link>
          <div className="nav-buttons-div">
              <Button
                id="fade-button"
                aria-controls={openDropdown1 ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openDropdown1 ? 'true' : undefined}
                style={{color: grey[500] }}
                onClick={handleClickDropdown1}
              >
                Tabele
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl1}
                open={openDropdown1}
                onClose={handleCloseDropdown1}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleCloseDropdown1} component='a' href='/tabele/fodmap'>Fodmap</MenuItem>
                <MenuItem onClick={handleCloseDropdown1} component='a' href='/tabele/hit'>Nietolerancja Histaminy</MenuItem>
              </Menu>
              <Button
                id="fade-button"
                aria-controls={openDropdown2 ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openDropdown2 ? 'true' : undefined}
                style={{color: grey[500] }}
                onClick={handleClickDropdown2}
              >
                Info
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl2}
                open={openDropdown2}
                onClose={handleCloseDropdown2}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleCloseDropdown2} component='a' href='/info/fodmap'>Dieta FODMAP</MenuItem>
                <MenuItem onClick={handleCloseDropdown2} component='a' href='/info/hit'>Nietolerancja histaminy</MenuItem>

              </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}