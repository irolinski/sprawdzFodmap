import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { Link, Menu, MenuItem, Fade, IconButton, Divider } from '@mui/material';

import { useState } from 'react';

import ListIcon from '@mui/icons-material/List';




export default function ButtonAppBar({ open, handleDrawerOpen }: any) {


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
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="navbar" position="static" style={{ background: 'transparent', boxShadow: 'none'}} aria-labelledby='toggle-navigation'>
          <Toolbar>
            <Link aria-label={"logo - link do strony głównej"} className="page-brand" font-weight="800" href={`/`}>
                  SprawdźFODMAP
            </Link>
            <IconButton className="drawer-button"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                  <ListIcon />
              </IconButton>
            <div className="nav-buttons-div">
                <Button
                  id="fade-button"
                  aria-controls={openDropdown1 ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openDropdown1 ? 'true' : undefined}
                  style={{color: grey[500] }}
                  onClick={handleClickDropdown1}
                >
                  Diety
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
                  <MenuItem onClick={handleCloseDropdown1} component='a' href='/#/fodmap' aria-label="diety low fodmap">d. Low FODMAP</MenuItem>
                  <MenuItem onClick={handleCloseDropdown1} component='a' href='/#/hit' aria-label="diety przeciwhistaminowe">d. Przeciwhistaminowe</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseDropdown1} component='a' href='/'>Szukaj</MenuItem>
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
                  <MenuItem onClick={handleCloseDropdown2} component='a' href='/#/o-nas'>O nas</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseDropdown2} component='a' href='/#/rozwoj'>Rozwój</MenuItem>

                </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}