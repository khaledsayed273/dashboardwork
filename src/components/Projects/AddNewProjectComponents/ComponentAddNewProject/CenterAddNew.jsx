import { Typography } from '@mui/material'
import React from 'react'
import Top from '../centerComponent/Top'
import Bottom from '../centerComponent/Bottom'

function CenterAddNew({setImg ,img  ,setFile  ,file , setName, name , budget , setBudget}) {
    return (
        <Typography variant='div' component="div" sx={{
            width: "100%",
            minHeight: "55vh",
            background: "#012939",
            marginTop: "25px",
            borderTop: "10px solid #5c8308",
            borderRadius: "5px 0 0 0",
            padding: "30px 40px"
        }}>

            <Top setName={setName} name={name} budget={budget} setBudget={setBudget}/>
            <Bottom setImg={setImg} img={img} setFile={setFile} file={file}/>

        </Typography>
    )
}

export default CenterAddNew
