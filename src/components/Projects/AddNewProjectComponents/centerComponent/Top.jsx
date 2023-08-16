import { Typography } from '@mui/material'
import React from 'react'

function Top({ setName, name, budget, setBudget }) {
    return (
        <Typography variant='div' component="div" >
            <Typography className='Text' sx={{ fontSize: "28px", fontWeight: "500" }}>
                Project details:
            </Typography>
            <Typography variant='div' component="div" sx={{ margin: "15px 0" }}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='inp' placeholder='Name' type="text" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgb(255 255 255 / 67%)",
                        fontSize: "17px",
                        outline: "none !important"
                    }} />
            </Typography>
            <Typography variant='div' component="div" sx={{ margin: "23px 0" }}>
                <input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className='inp' placeholder='Total budget' type="number" style={{
                        background: "transparent",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "7px",
                        border: "1px solid rgb(255 255 255 / 67%)",
                        fontSize: "17px",
                        outline: "none !important"
                    }} />
            </Typography>
        </Typography>
    )
}

export default Top
