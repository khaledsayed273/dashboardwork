import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SendIcon from '@mui/icons-material/Send';

function RightComponents() {


    const ComeMessage = () => {
        return (
            <Typography variant='div' component="div" sx={{ display: "flex", marginBottom: "40px " }}>
                <ListItemAvatar sx={{ marginTop: "5px" }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <Typography variant='div' component="div" sx={{
                    background: "#10394A",
                    padding: "15px",
                    maxWidth: "50%",
                    position: "relative",
                    borderRadius: "15px"
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.
                    <Typography variant='div' component="div" sx={{
                        position: "absolute",
                        bottom: "-30px",
                        color: "#CBCBCB",
                        fontSize: "12px"
                    }}>
                        10:15 pm
                    </Typography>
                </Typography>
            </Typography>
        )
    }


    const SendMessage = () => {
        return (
            <Typography variant='div' component="div" sx={{ display: "flex", marginBottom: "40px ", flexDirection: "row-reverse" }}>
                <ListItemAvatar sx={{ marginTop: "5px", marginLeft: "15px" }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <Typography variant='div' component="div" sx={{
                    background: "rgba(101, 154, 16, 0.2)",
                    padding: "15px",
                    maxWidth: "50%",
                    position: "relative",
                    borderRadius: "15px"
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac. Tortor dolor eu at bibendum suspendisse. Feugiat mi eu, rhoncus diam consectetur libero morbi pharetra. Id tristique mi eget eget tristique orci.
                    <Typography variant='div' component="div" sx={{
                        position: "absolute",
                        bottom: "-30px",
                        color: "#CBCBCB",
                        fontSize: "12px",
                        right: "20px"
                    }}>
                        10:15 pm
                    </Typography>
                </Typography>
            </Typography>
        )

    }

    return (
        <>
            <Typography className='textColorMessage' variant='div' component="div" sx={{
                background: "#012939",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: 'space-between',
                borderRadius: "15px"
            }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="zainab ahmed"
                        secondary={
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                            >
                                online
                            </Typography>
                        }
                    />
                </ListItem>

                <Typography variant='div' component="div" sx={{
                    fontSize: "12px",
                    color: "#CBCBCB",
                    marginRight: "15px",
                    cursor: "pointer"
                }}>
                    <MoreVertIcon />
                </Typography>

            </Typography>

            <Typography className='textColor' variant='div' component="div" sx={{
                background: "#012939",
                height: "695px",
                marginTop: "20px",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"


            }}>

                <Typography variant='div' component="div" sx={{ overflowY: "auto", height: "610px", width: "100%", padding: "25px" }}>
                    {ComeMessage()}
                    {ComeMessage()}
                    {SendMessage()}
                    {SendMessage()}

                </Typography>

                <Typography variant='div' component="div" sx={{ width: "100%", padding: "15px" }}>
                    <Typography variant='div' component="div" sx={{
                        border: "1px solid white",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <input placeholder='Write a message...' type="text" style={{
                            background: "transparent",
                            padding: "7px 10px 7px 25px",
                            color: "white",
                            border: "0",
                            outline: "0",
                            width: "100%"


                        }} />
                        <Typography variant='div' component="div" sx={{ display: "flex", alignItems: "center" }}>

                            <Typography variant='div' component="div" sx={{
                                marginLeft: "5px",
                                cursor: "pointer"
                            }}>
                                <AttachmentIcon />

                            </Typography>
                            <Typography variant='div' component="div" sx={{
                                marginLeft: "5px",
                                cursor: "pointer"
                            }}>
                                <SentimentVerySatisfiedIcon />

                            </Typography>
                            <Typography variant='div' component="div" sx={{
                                margin: "5px",
                                cursor: "pointer",
                                background: "#659A10",
                                padding: "1px 3px"
                            }}>
                                <SendIcon />

                            </Typography>
                        </Typography>

                    </Typography>

                </Typography>



            </Typography>

        </>
    )
}

export default RightComponents
