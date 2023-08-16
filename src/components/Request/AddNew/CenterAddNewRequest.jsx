import { Typography } from '@mui/material'
import React from 'react'
import RequestDetails from './CenterComponents/RequestDetails'
import ServiceDetails from './CenterComponents/ServiceDetails'

function CenterAddNewRequest({title , setTitle , instruction , setInstruction}) {
    return (
        <Typography variant='div' component="div">
            <RequestDetails title={title} setTitle={setTitle}/>
            <ServiceDetails instruction={instruction} setInstruction={setInstruction} />

        </Typography>
    )
}

export default CenterAddNewRequest
