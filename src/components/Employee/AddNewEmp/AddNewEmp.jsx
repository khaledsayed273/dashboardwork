import React from 'react'
import "./AddNewEmp.css"
import { Typography } from '@mui/material'
import HeaderAddNewEmp from './HeaderAddNewEmp/HeaderAddNewItems'
import ContentEmp from './ContentEmp'

function AddNewEmp() {
  return (
    <Typography variant='div' component="div" className='ADD-Emp' sx={{
        width: 0,
        position: "absolute",
        top: 0,
        right: "0",
        bottom: "0",
        background: "#10394A",
        zIndex: 2,
        transition: "800ms",
        overflow: "hidden",
        height: "100%"
    }}>

        <HeaderAddNewEmp/>
        <ContentEmp />


    </Typography>
  )
}

export default AddNewEmp
