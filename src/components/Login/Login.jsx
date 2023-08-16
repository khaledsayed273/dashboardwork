import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from "../../Icons/Logo.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAsync } from '../../Redux/Slices/LoginSlice'

function Login() {

    


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const SendData = () => {
        const data = { email, password }
        dispatch(LoginAsync(data))
    }


    const data = useSelector(state => state.Login)


    useEffect(() => {
        if(localStorage.getItem("token") && data.Loged === false){
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }else if(data.Loged){
            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))
            navigate("/")
            window.location.reload()
        }
    },[data , navigate])

    return (


        <Grid sx={{ height: "100vh" }} container>
            <Grid sx={{ height: "100%" }} item xs={12} md={8} >
                <Typography variant='div' component="div" sx={{
                    background: "#012939",
                    padding: "25px",
                    height: "100%"
                }}>

                    <Typography className='d-flex flex-column justify-content-between h-100' variant='div' component="div" >
                        <Typography style={{ width: "250px", height: "70px" }} variant='div' component="div">
                            <img className='w-100 h-100' src={Logo} alt="" />

                        </Typography>


                        <Typography variant='div' component="div">
                            <Typography className='text-white fw-bold' variant='h5' sx={{
                                fontSize: "35px",
                                marginBottom: "30px"
                            }}>
                                Login
                            </Typography>
                            <Typography variant='div' component="div">
                                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 ps-4 my-3 btnLogin' />
                                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 ps-4 mt-1 mb-3 btnLogin' />

                                <Typography variant='div' component="div">
                                    <Link style={{
                                        color: "white",
                                        fontSize: "25px",
                                        marginLeft: "2%"
                                    }}>
                                        Forgot Password?
                                    </Link>
                                </Typography>
                                <Typography sx={{ margin: "30px 0" }} variant='div' component="div">
                                    <Button onClick={SendData} sx={{
                                        width: "100%",
                                        background: "#7DB00E",
                                        color: "white",
                                        padding: "10px",
                                        fontSize: "22px",
                                        fontWeight: "bold",
                                        border: "1px solid #7DB00E"
                                    }}>Log in</Button>
                                </Typography>

                            </Typography>
                        </Typography>

                        <Typography variant='div' component="div" sx={{
                            color: "white",
                            textAlign: "center",
                            fontSize: "30px",
                            padding: "10px 30px"
                        }}>

                            This site is protected by reCAPTCHA and the Google
                            <Typography variant='span' sx={{ color: "#7DB00E", marginLeft: "5px" }}>
                                Privacy Policy
                            </Typography> and
                            <Typography variant='span' sx={{ color: "#7DB00E", marginLeft: "5px" }}>
                                Terms of Service
                            </Typography> apply.


                        </Typography>
                    </Typography>


                </Typography>

            </Grid>
            <Grid sx={{ height: "100%" }} item xs={12} md={4} >
                <Typography className='d-flex flex-column justify-content-center align-items-center text-white p-5 p-md-3 p-lg-5 h-100' variant='div' component="div">
                    <Typography variant='div' component="div" sx={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}>
                        Level up your community
                    </Typography>

                    <Typography className='my-3' variant='div' component="div" sx={{
                        background: "#D9D9D9",
                        height: "600px",
                        width: "100%"
                    }}>
                    </Typography>

                    <Typography variant='div' component="div" className='w-100 mt-2'>
                        <Link to="/register">
                            <Button sx={{
                                color: "white",
                                width: "100%",
                                fontSize: "22px",
                                background: "#7DB00E",
                                border: "1px solid #7DB00E"
                            }}>Signup Free</Button>
                        </Link>
                    </Typography>



                </Typography>

            </Grid>

        </Grid>
    )
}

export default Login
