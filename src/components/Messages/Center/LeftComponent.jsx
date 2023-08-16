import { Typography } from '@mui/material'
import React from 'react'
import Gear from "../../../Icons/Gear.png"
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import MessagesComponent from './MessagesComponent';

function LeftComponent() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
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
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    return (
        <>
            <Typography variant='div' component="div" className='textColor' sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Typography variant='div' component="div" sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant='div' component="div">
                        inbox
                    </Typography>
                    <Typography variant='div' component="div" sx={{
                        marginLeft: "15px",
                        background: "#5D9311",
                        padding: "2px 10px",
                        borderRadius: "15px"
                    }}>
                        2 new
                    </Typography>
                </Typography>

                <Typography variant='div' component="div" sx={{ cursor: "pointer" }}>
                    <img src={Gear} alt="" />
                </Typography>
            </Typography>

            <Typography variant='div' component="div" sx={{margin: "20px 0"}}>
                <Search sx={{ margin: "0 !important", color: "white", background: "#012939" , borderRadius: "15px" }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{ width: "100%" }}
                    />
                </Search>

            </Typography>

            <Typography variant='div' component="div">
                    <MessagesComponent/>
            </Typography>

        </>
    )
}

export default LeftComponent
