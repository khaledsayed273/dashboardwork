import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from './Footer/Footer'
import LeftComponent from './LeftComponent'
import Notify from '../../../Notify'
import { useDispatch, useSelector } from 'react-redux'
import { sendDataAsync } from '../../../../Redux/Slices/sendData/sendDataSlice'
import { ToastContainer } from 'react-toastify'

function ContentExpense() {




    const [load, setLoad] = useState(false)

    const [title, setTitle] = useState("")
    const [describe, setDescribe] = useState("")
    const [date, setDate] = useState("")
    const [client_id, setClient_id] = useState("")



    const dispatch = useDispatch()

    const data = useSelector(state => state.sendData)



    const HandleClick = async () => {
        if (
            title &&
            describe &&
            date &&
            client_id
        ) {
            await dispatch(sendDataAsync(["expense", {
                title,
                describe,
                data,
                client_id
            }]))
            setLoad(true)
        } else {
            Notify("please fill your data ", "warning")
        }
    }

    useEffect(() => {
        if (load) {
            if (data.loading === false) {
                if (data.status === 200) {
                    Notify(data.data.massage, "success")
                    setLoad(false)
                } else if (data.status === 400) {
                    Notify("Error Please Try Again Later", "error")
                }
            }
        }
    }, [load, data])





    return (
        <Typography className='invoice' variant='div' component="div" sx={{
            width: "100%",
            background: "#012939",
            marginTop: "25px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "30px 20px",
            color: "white"
        }}>


            <Grid container spacing={{ md: 3 }}>

                <Grid item xs={12} md={6} sx={{ borderRight: { md: "0.5px solid #FFFFFF" }, borderBottom: { xs: "0.5px solid #FFFFFF", md: "none" } }}>
                    <Typography variant='div' component="div" sx={{
                        height: "100%",
                        paddingRight: "20px"
                    }}>

                        <LeftComponent title={title} setTitle={setTitle} date={date} setDate={setDate} client_id={client_id} setClient_id={setClient_id} />

                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{ fontSize: "25px" }} variant='h4' className='textColor mt-3 mt-lg-0'>
                        Description
                    </Typography>

                    <Typography variant='div' component="div" sx={{ marginTop: "26px" }}>
                        <textarea
                            onChange={(e) => setDescribe(e.target.value)}
                            value={describe}
                            className='textColor'
                            style={{
                                width: "100%",
                                minHeight: "240px",
                                maxHeight: "240px",
                                background: "transparent",
                                borderRadius: "8px",
                                border: "1px solid #ffffff4a",
                                padding: "10px"

                            }}></textarea>

                        <Typography sx={{ color: "#ffffffb0" }}>
                            Do not exceed 100 characters when entering the item name
                        </Typography>

                    </Typography>

                </Grid>
            </Grid>

            <Footer HandleClick={HandleClick} />

            <ToastContainer autoClose={3000} />


        </Typography>
    )
}

export default ContentExpense
