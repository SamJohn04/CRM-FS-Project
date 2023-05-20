import React, { useEffect, useState } from "react";
import { Box, Button, Fab, Grid, IconButton } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Add, Chat, Delete, Edit, People } from "@mui/icons-material";
import ClientList from "./ClientList";
import { Link } from 'react-router-dom'
import { deleteClient, getClients } from "../redux/clientSlice";

export default function ClientCard() {
    const user = useSelector((state) => state.client.user)
    const [modalState, setModalState] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("Runing once")
        dispatch(getClients())
    }, [])
    if(user.uID === null) {
        return (
            <div>
                <div className = "add-button" ><Link to="/new"><Fab color="primary" aria-label="add"><Add /></Fab></Link></div>
                <div className="null-modal">
                    <h2>No Clients added yet! <br/>To add a new client, click on the '+' Button</h2>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className = "add-button"><Link to="/new"><Fab color="primary" aria-label="add"><Add /></Fab></Link></div>
            <Box id='list-button'><IconButton onClick={() => setModalState(true)}><People /></IconButton></Box>
            <Box id='modal-big'>
                <Grid container>
                    <Grid item md={4}>
                        <ClientList setModalState={setModalState}/>
                    </Grid>
                    <Grid item md={8} className='client-info'>
                        <div className="client-head"><h2>{user.name}</h2><div><Link to = "/edit"><IconButton aria-label="edit"><Edit className="icon-button-edit"/></IconButton></Link><IconButton aria-label="delete" onClick={() => {const choice = window.confirm('Are you sure?');if(choice)dispatch(deleteClient(user.uID))}}><Delete  className="icon-button-delete"/></IconButton></div></div>
                        <div>
                            <div className="client-detail"><div className="grey-small">UserID:</div><div className="pad-left">{user.uID}</div></div>
                            <div className="client-detail"><div className="grey-small">Email:</div><div className="pad-left">{user.email}</div></div>
                            <div className="client-detail"><div className="grey-small">Phone:</div><div className="pad-left">{user.phoneNumber}</div></div>
                        </div>
                        <div className="chat-button"><Button><Chat /> Chat</Button></div>
                    </Grid>
                </Grid>
            </Box>
            <Box id='modal-small'>
                { modalState ?
                <ClientList setModalState={setModalState}/> : 
                <div className="client-info">
                    <div className="client-head"><h2>{user.name}</h2><div><Link to = "/edit"><IconButton aria-label="edit"><Edit className="icon-button-edit"/></IconButton></Link><IconButton aria-label="delete" onClick={() => {const choice = window.confirm('Are you sure?');if(choice)dispatch(deleteClient(user.uID))}}><Delete  className="icon-button-delete"/></IconButton></div></div>
                    <div>
                        <div className="client-detail"><div className="grey-small">UserID:</div><div className="pad-left">{user.uID}</div></div>
                        <div className="client-detail"><div className="grey-small">Email:</div><div className="pad-left">{user.email}</div></div>
                        <div className="client-detail"><div className="grey-small">Phone:</div><div className="pad-left">{user.phoneNumber}</div></div>
                    </div>
                    <div className="chat-button"><Button><Chat /> Chat</Button></div>
                </div>
                }
            </Box>
        </div>
    )
}