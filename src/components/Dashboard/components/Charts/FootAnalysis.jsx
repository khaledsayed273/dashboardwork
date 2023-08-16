import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

function FootAnalysis() {

    const Progress = [
        {
            id: 1,
            progress: "70%"
        },
        {
            id: 2,
            progress: "40%"
        },
        {
            id: 3,
            progress: "60%"
        },
        {
            id: 4,
            progress: "80%"
        },
        {
            id: 5,
            progress: "20%"
        },
    ]



    const data = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 7800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3890,
            pv: 5300,
            amt: 2100,
        },
        {
            name: 'Sep',
            uv: 1490,
            pv: 2300,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 7490,
            pv: 2300,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 4490,
            pv: 8300,
            amt: 2100,
        },
        {
            name: 'Des',
            uv: 4490,
            pv: 5300,
            amt: 2100,
        },
    ];

    return (
        <div className='my-3 textColor'>
            <Grid container spacing={5}>

                <Grid item xs={12} md={7} lg={8}>
                    <Typography variant='div' component="div" sx={{
                        background: "#012939",
                        borderRadius: "7px",
                        padding: "15px"
                    }}>

                        <Typography variant='div' component="div" className='d-flex justify-content-between align-items-center'>
                            <Typography>
                                Total Revenue
                            </Typography>

                            <Typography variant='div' component="div" className='d-flex'>

                                <Typography variant='div' component="div" className='me-3 d-flex align-items-center'>
                                    <span
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            background: "#475BE8",
                                            borderRadius: "50%",
                                            margin: "0 5px"
                                        }}
                                    ></span>
                                    <Typography>
                                        Profit
                                    </Typography>

                                </Typography>

                                <Typography variant='div' component="div" className='me-3 d-flex align-items-center'>
                                    <span
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            background: "#E3E7FC",
                                            borderRadius: "50%",
                                            margin: "0 5px"

                                        }}
                                    ></span>
                                    <Typography>
                                        Loss
                                    </Typography>
                                </Typography>

                            </Typography>

                        </Typography>


                        <Typography variant='div' component="div" className='my-3 d-flex align-items-center'>
                            <span style={{ fontSize: "30px", fontWeight: "bold" }}>$50.4K</span>
                            <span style={{ color: "#4CE13F", marginLeft: "10px" }}>+ 5% than last month</span>
                        </Typography>


                        <div style={{ width: "100%", height: "250px" }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="pv" fill="#475BE8" />
                                    <Bar dataKey="uv" fill="white" />
                                </BarChart>
                            </ResponsiveContainer>

                        </div>

                    </Typography>

                </Grid>

                <Grid item xs={12} md={5} lg={4}>
                    <Typography variant='div' component="div" sx={{
                        background: "#012939",
                        borderRadius: "7px",
                        padding: "15px"
                    }}>

                        <Typography variant='div' component="div" sx={{
                            fontWeight: "bold"
                        }}>
                            Most Sold Project
                        </Typography>

                        {Progress.map((item) => {
                            return (
                                <div key={item.id} className='my-3'>
                                    <Typography variant='div' component="div" sx={{
                                        fontWeight: "bold",
                                        margin: "5px 0",
                                        textAlign: "right"
                                    }}>
                                        {item.progress}
                                    </Typography>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{ width: item.progress, background: "#475BE8" }}></div>
                                    </div>
                                </div>
                            )
                        })}
                    </Typography>

                </Grid>

            </Grid>
        </div>
    )
}

export default FootAnalysis
