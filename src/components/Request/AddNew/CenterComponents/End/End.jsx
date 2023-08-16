import { Grid } from '@mui/material'
import React from 'react'
import Schedule from './Schedule'
import Notes from './Notes'

function End({ start_time, setStart_time, day, setDay }) {
    return (
        <Grid container spacing={5}>
            <Schedule
                start_time={start_time}
                setStart_time={setStart_time}
                day={day}
                setDay={setDay}

            />
            <Notes />

        </Grid>
    )
}

export default End
