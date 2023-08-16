import { Checkbox, FormControl, FormControlLabel, Grid, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import iconCalender from "../../../../Icons/material-symbols_date-range-outline-rounded.png"

function Schedule({ title, inputText, active, start_time, setStart_time, end_time, setEnd_time }) {
    return (
        <Typography variant='div' component="div" sx={{
            background: "#012939",
            minHeight: "150px",
            width: "100%",
            marginBottom: "20px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "20px"
        }}>
            <Typography variant='div' component="div">
                <Typography className='Text' variant='h5'>
                    {title}

                </Typography>

            </Typography>

            <Typography variant='div' component="div">
                <Typography className='Text' variant='div' >
                    {inputText ? (
                        <Grid container variant='div' component="div" sx={{ display: "flex", marginTop: "20px" }}>
                            <Grid xl={4} xs={12} lg={5} item variant='div' component="div">
                                <label style={{ marginBottom: "10px" }} htmlFor="StartDate">Start date:</label>
                                <Typography className='w-100' variant='div' component="div" sx={{ fontSize: "30px" }}>
                                    <FormControl sx={{
                                        width: '100%',
                                        position: "relative",
                                        padding: "5px"
                                    }}>
                                        <Typography variant='div' component="div" sx={{
                                            position: "absolute",
                                            right: "10px",
                                            top: "0px",
                                            cursor: "pointer"
                                        }}>
                                            <img className='w-100 h-100' src={iconCalender} alt="icon" />

                                        </Typography>

                                        <OutlinedInput type='date' value={start_time} onChange={(e) => setStart_time(e.target.value)} sx={{ border: "1px solid #ffffff8c", height: "45px", borderRadius: "7px !important" }} placeholder="" />

                                    </FormControl>
                                </Typography>
                            </Grid>
                            <Grid className='mt-2 mt-lg-0  ms-xl-4 ms-0' item xl={4} lg={5} xs={12} variant='div' component="div">
                                <label style={{ marginBottom: "10px" }} htmlFor="EndDate">End date:</label>
                                <Typography className='w-100' variant='div' component="div" sx={{ fontSize: "30px" }}>
                                    <FormControl sx={{
                                        width: '100%',
                                        position: "relative",
                                        padding: "5px"
                                    }}>
                                        <Typography variant='div' component="div" sx={{
                                            position: "absolute",
                                            right: "10px",
                                            top: "0px",
                                            cursor: "pointer !important"
                                        }}>
                                            <img className='w-100 h-100' src={iconCalender} alt="icon" />

                                        </Typography>

                                        <OutlinedInput type='date' value={end_time} onChange={(e) => setEnd_time(e.target.value)} sx={{ border: "1px solid #ffffff8c", height: "45px", borderRadius: "7px !important" }} placeholder="" />

                                    </FormControl>
                                </Typography>
                            </Grid>
                        </Grid>
                    ) : null}
                </Typography>

            </Typography>

            {active ? (
                <Typography sx={{ marginTop: "15px" }} variant='div' component="div">
                    <FormControlLabel control={<Checkbox sx={{ color: "#7DB00E" }} />} sx={{ color: "white" }} label={active} />
                </Typography>
            ) : null}

        </Typography>
    )
}

export default Schedule
