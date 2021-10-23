import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


 const HeaderMobile = () => {
  /** 設定Navbar List 的展開和收合 */
  const [showNavbar, setShowNavbar] = React.useState(false)
  const openNavList = () =>{
    setShowNavbar(!showNavbar)
  }
 
  return (
    <Box sx={{ flexGrow: 1 }} className="navbar-mobile bg-blue-100">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={openNavList}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Logo Here
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
      { showNavbar ? <NavbarItems openNavList={openNavList} /> : null }
    
    </Box>
  );
}
export default HeaderMobile;


const NavbarItems = (props) => (
  <nav aria-label="secondary mailbox folders">
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={props.openNavList} href="#simple-list">
          <ListItemText primary="關於我們" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={props.openNavList} href="#simple-list">
          <ListItemText primary="聯絡資訊" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={props.openNavList} component="a" href="#simple-list">
          <ListItemText primary="主題旅遊" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={props.openNavList} component="a" href="#simple-list">
          <ListItemText primary="景點介紹" />
        </ListItemButton>
      </ListItem>
    </List>
  </nav>
  )
