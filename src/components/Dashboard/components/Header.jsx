/* eslint-disable jsx-a11y/alt-text */
import { Typography } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import useApp from '../../../Hooks/useApp';
import { Switch } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Interrogative from "../../../Icons/interrogative.png"

function Header() {

    const { checked, setChecked } = useApp();

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

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
            <Typography className='textColor' variant='div' component="div"
                sx={{
                    background: "#012939",
                    display: "flex",
                    marginTop: '15px',
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px"
                }}
            >
                <Typography sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginLeft: "25px"

                }}>
                    Company name
                </Typography>

                <div className='d-flex flex-wrap'>
                    <Typography
                        sx={{
                            marginRight: "40px",
                            width: { lg: "400px", md: "300px" }
                        }}
                        variant='div' component="div">
                        <Search sx={{
                            margin: "0 !important",
                            color: "white",
                            background: "transparent",
                            border: "1px solid #7DB00E",
                            width: "100%",

                        }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{ width: "100%" }}
                            />
                        </Search>
                    </Typography>

                    <Typography className='me-5 me-md-0 me-xl-2 HeaderRight d-none d-md-flex align-items-center' variant='div'>

                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />

                        <Typography className='d-none d-md-block' variant='div' sx={{ color: "white", fontWeight: "bold", fontSize: "22px", fontFamily: "" }}>
                            Dark Mode
                        </Typography>


                        <Typography variant='div' sx={{ color: "white", fontWeight: "bold", marginLeft: "20px", cursor: "pointer" }}>
                            <NotificationsNoneIcon sx={{ fontSize: "30px" }} />
                        </Typography>

                        <Typography variant='div' sx={{ color: "white", fontWeight: "bold", marginLeft: "10px", cursor: "pointer" }}>
                            <img src={Interrogative} />
                        </Typography>
                    </Typography>
                </div>


            </Typography>
        </>
    )
}

export default Header
