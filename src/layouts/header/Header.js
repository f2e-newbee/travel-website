 import React from 'react'
 import { StyledEngineProvider } from '@mui/material/styles';
 import SearchIcon from '@mui/icons-material/Search';
 import HeaderMobile from './HeaderMobile';
 import { styled, alpha } from '@mui/material/styles';
 import InputBase from '@mui/material/InputBase';

 /**  SearchBar Style */
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


 export const Header = () => {
     return (
         <div>
            <StyledEngineProvider injectFirst>
                <HeaderMobile />
            </StyledEngineProvider>
            <div className="navbar-desktop w-full h-16 bg-blue-400	flex items-center justify-between p-5">
               <div className="text-gray-50">
                   Logo Here
               </div>
                <ul className="w-100 flex text-gray-100 pr-20 flex items-center">
                    <li className="mr-2 px-10 hover:text-white font-bold">
                        <a href="/#">關於我們</a>
                    </li>
                    <li className="mr-2 px-10 hover:text-white font-bold">
                        <a href="/#">聯絡資訊</a>
                    </li>
                    <li className="mr-2 px-10 hover:text-white font-bold">
                        <a href="/#">主題旅遊</a>
                    </li>
                    <li className="mr-2 px-10 hover:text-white font-bold">
                        <a href="/#">景點介紹</a>
                    </li>
                    <li className="mr-2 px-10 hover:text-white font-bold">
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="輸入關鍵字.."
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>                     
                    </li>
                </ul>
            </div>
         </div>
        
     )
 }
 