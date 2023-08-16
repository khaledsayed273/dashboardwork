import React from 'react'
import useApp from '../../Hooks/useApp';
import HeaderComp from '../ForAllComponents/Header';
import CenterInvoice from './Center/CenterInvoice';
import TableInvoice from './Table/TableInvoice';
import AddNewInvoice from './AddInvoice/AddNewInvoice';
import { Typography } from '@mui/material';

function Invoice() {

    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <CenterInvoice />
            <TableInvoice />
            <AddNewInvoice/>
        </Typography>
    )
}

export default Invoice
