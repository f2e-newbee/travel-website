import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import RoomIcon from '@mui/icons-material/Room';

 const HeaderMobile = () => {
  /** 設定Navbar List 的展開和收合 */
  const [state, setState] = React.useState(false);
  

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const switchIcon = (page) =>{
    switch(page){
      case '首頁':
        return <HomeIcon />
      case '景點查詢':
        return <RoomIcon />
      case '美食探索':
        return <FoodBankIcon />
      case '住宿查詢':
        return <MapsHomeWorkIcon />
      default:
        return <HomeIcon />
    }
  }

  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          {
            page:'首頁',
            link: '/'
          }, 
          {
            page:'景點查詢',
            link: '/attractionlist'
          },
          {
            page:'美食探索',
            link: '/foodlist'
          },
          {
            page:'住宿查詢',
            link: '/'
          }
        ].map((item, index) => (
          <a href={item.link} key={item.page}>
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemIcon>
                {switchIcon(item.page)}
              </ListItemIcon>
              <ListItemText primary={item.page} />
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );
  
  
 
  return (
    <Box sx={{ flexGrow: 1 }} className="navbar-mobile bg-gray-100">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
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
      {/* { showNavbar ? <NavbarItems openNavList={openNavList} /> : null } */}
      <Drawer
            anchor="top"
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list('top')}
          </Drawer>
    </Box>
  );
}
export default HeaderMobile;





// const NavbarItems = (props) => (
//   <nav aria-label="secondary mailbox folders">
//     <List>
//       <ListItem disablePadding>
//         <ListItemButton onClick={props.openNavList} href="#simple-list">
//           <ListItemText primary="關於我們" />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton onClick={props.openNavList} href="#simple-list">
//           <ListItemText primary="聯絡資訊" />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton onClick={props.openNavList} component="a" href="#simple-list">
//           <ListItemText primary="主題旅遊" />
//         </ListItemButton>
//       </ListItem>
//       <ListItem disablePadding>
//         <ListItemButton onClick={props.openNavList} component="a" href="#simple-list">
//           <ListItemText primary="景點介紹" />
//         </ListItemButton>
//       </ListItem>
//     </List>
//   </nav>
//   )
