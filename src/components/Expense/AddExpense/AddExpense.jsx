import { Typography } from '@mui/material'
import React from 'react'

import './AddExpense.css'
import HeaderAddNewExpense from './HeaderAddNewExpense/HeaderAddNewExpense'
import ContentExpense from './ContentExpense/ContentExpense'

function AddExpense() {
  return (
    <Typography variant='div' component="div" className='ADD-Expense' sx={{
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
        <HeaderAddNewExpense/>
        <ContentExpense />
        


    </Typography>
  )
}

export default AddExpense
