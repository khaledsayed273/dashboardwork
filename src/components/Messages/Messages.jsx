import React from 'react'
import HeaderComp from '../ForAllComponents/Header'
import useApp from '../../Hooks/useApp';
import Center from './Center/Center';
import { Typography } from '@mui/material';

function Messages() {
    const { checked, setChecked } = useApp();

    return (
        <Typography variant='div' component="div" sx={{p:3}}>
            <HeaderComp setChecked={setChecked} checked={checked} />
            <Center />
        </Typography>
    )
}

export default Messages
