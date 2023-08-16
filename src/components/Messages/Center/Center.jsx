import { Grid, Typography } from '@mui/material'
import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponents from './RightComponents'

function Center() {
    return (
        <>
            <Typography variant='div' component="div" className='textColor' sx={{
                fontSize: "30px",
                fontWeight: "bold",
                margin: "20px 0"
            }}>
                Messages
            </Typography>
            <Grid container spacing={5}>
                <Grid item xs={12} md={4} lg={3}>

                    <LeftComponent />
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <RightComponents />
                </Grid>
            </Grid>

        </>
    )
}

export default Center
