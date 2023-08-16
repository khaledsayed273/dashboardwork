import { FormControl, Grid, OutlinedInput, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import iconDropImg from "../../../../../Icons/IconDropimg.png"


function Notes() {

    const [file, setFile] = useState(null);
    const [img, setImg] = useState("")

    const handleChange = (file) => {
        if (file) {
            setFile(file);
        }
    };

    useEffect(() => {
        if (file) {
            setImg(URL.createObjectURL(file?.target?.files[0]));
        }
    }, [file])


    const NoImg = () => {
        return (
            <Typography htmlFor="file" variant='div' component="div" sx={{ height: "170px", marginTop: "20px" , marginBottom: "75px" }} >
                <label htmlFor="file">
                    <input id='file' type="file" onChange={handleChange} />
                    <Typography className='parentInputImg' sx={{
                        width: "270px",
                        height: "100%",
                        marginTop: "20px",
                        border: "2px dashed  #7DB00E",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "10px",
                        cursor: "pointer"
                    }} variant='div' component="div" >
                        <Typography sx={{ margin: "20px 0", cursor: "pointer" }} variant='div' component="div">
                            <img src={iconDropImg} alt="" />
                        </Typography>
                        <Typography variant='div' component="div">
                            <Typography variant='div' component="div" className='Text' style={{ fontSize: "bold !important", cursor: "pointer" }}>Drop your image here or select <span style={{ color: "#7DB00E" }}>click to browse</span></Typography>
                        </Typography>
                    </Typography>
                </label >
            </Typography>

        )
    }


    return (
        <Grid item md={6} xs={12}>
            <Typography variant='div' component="div" sx={{
                background: "#012939",
                borderTop: "2px solid #7DB00E",
                color: "white",
                padding: "30px",
                marginBottom: "30px"
            }}>

                <Typography>
                    Notes & Attachments:
                </Typography>

                <Typography variant='div' component="div" sx={{ marginTop: "10px" }}>
                    <FormControl sx={{ width: '100%' }}>
                        <OutlinedInput sx={{ border: "1px solid #ffffff8c", height: "45px", borderRadius: "7px !important" }} placeholder="Type here" />
                    </FormControl>
                </Typography>

                <Typography variant='div' component="div" sx={{display: "flex" , justifyContent:"center" , alignItems: "center" }}>
                    {img ?
                        (
                            <Typography onClick={() => setImg("")} sx={{
                                margin: "33px 0",
                                cursor: "pointer",
                                maxWidth: "300px",
                                height: "200px",
                                border: "2px solid white",
                                borderRadius: ""
                            }} variant='div' component="div">
                                <img className='w-100 h-100' src={img} alt="" />
                            </Typography>
                        )
                        :
                        (
                            NoImg()
                        )
                    }
                </Typography>

            </Typography>

        </Grid>
    )
}

export default Notes
