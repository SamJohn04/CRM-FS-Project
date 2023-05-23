import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClient } from "../redux/clientSlice";

export default function AddClient() {
    const nameField = useRef()
    const emailField = useRef()
    const phoneField = useRef()
    const dispatch = useDispatch()
    return (
        <Box>
            <form className="add-client-box" action="http://localhost:8080/addUser" method="POST">
                <TextField label="Name" fullWidth type={"text"} inputRef={nameField} name="name"/>
                <TextField label="Email" fullWidth type={"email"} inputRef={emailField} name="email"/>
                <TextField label="Phone Number" fullWidth type={"number"} inputRef={phoneField} name="phoneNumber"/>
                <div style={{display: "flex", justifyContent: "center", gap: "2rem"}}><Button onClick={() => dispatch(addClient({name: nameField.current.value, email: emailField.current.value, phoneNumber: phoneField.current.value}))} disabled={useSelector((state) => state.client.loading)} >Submit</Button><Button onClick={() => {nameField.current.value = emailField.current.value = phoneField.current.value = ''}}  disabled={useSelector((state) => state.client.loading)}>Reset</Button></div>
                {/* <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}><input type={'submit'}/><input type={'reset'}/></div> */}
            </form>
        </Box>
    )
}