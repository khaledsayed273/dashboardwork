import { Grid, Typography } from '@mui/material'
import React from 'react'
import Secgedule from './Secgedule'
import Selender from './calendar/calendar'
import TeamComponent from './team/TeamComponent'
import FooterBtns from './FooterBtns'
import Schedule from './Schedule'
import TaskComponent from './TaskComponent'
import CenterAddNew from '../ComponentAddNewProject/CenterAddNew'

function Footer({
    HandleClick,
    start_time,
    setStart_time,
    end_time,
    setEnd_time,
    setSubtotal,
    subtotal,
    budget,
    setBudget,
    img,
    setImg,
    file,
    setFile,
    name,
    setName
}) {

    return (
        <Typography variant='div' component="div" sx={{ marginTop: "25px" }}>
            <Grid container spacing={{ md: 4 }}>
                <Grid item md={5} xs={12}>
                    <CenterAddNew budget={budget} setBudget={setBudget} setImg={setImg} img={img} setFile={setFile} file={file} setName={setName} name={name} />
                    <Schedule start_time={start_time} setStart_time={setStart_time} end_time={end_time} setEnd_time={setEnd_time} title={'Schedule:'} inputText={true} active={"Schedule later"} />
                    <Secgedule title={"Supervisor:"} select={"Choose supervisor"} active={"Email supervisor about assignment"} />
                    <TeamComponent setSubtotal={setSubtotal} subtotal={subtotal} />
                    <TaskComponent title={"Task:"} />
                </Grid>
                <Grid item md={7} xs={12}>
                    <Selender />
                </Grid>
            </Grid>

            <FooterBtns HandleClick={HandleClick} />

        </Typography>
    )
}

export default Footer
