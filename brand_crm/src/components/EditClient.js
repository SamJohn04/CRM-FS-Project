import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setName, setPhone, updateUser } from "../redux/clientSlice";

export default function EditClient() {
    const nameField = useRef()
    const emailField = useRef()
    const phoneField = useRef()
    const user = useSelector((state) => state.client.user)
    const dispatch = useDispatch()
    //const dispatch = useDispatch()
    return (
        <Box>
            <form className="add-client-modal" action="http://localhost:8080/addUser" method="POST">
                <TextField label="Name" fullWidth type={"text"} inputRef={nameField} name="name" value={user.name} onChange={(e) => dispatch(setName(e.target.value))}/>
                <TextField label="Email" fullWidth type={"email"} inputRef={emailField} name="email" value={user.email} onChange={(e) => dispatch(setEmail(e.target.value))}/>
                <TextField label="Phone Number" fullWidth type={"number"} inputRef={phoneField} name="phoneNumber" value={user.phoneNumber} onChange={(e) => dispatch(setPhone(e.target.value))}/>
                <div style={{display: "flex", justifyContent: "center", gap: "2rem"}}><Button onClick={() => dispatch(updateUser(user))} disabled={useSelector((state) => state.client.loading)} >Save</Button><Button onClick={() => {nameField.current.value = user.name; emailField.current.value = user.email; phoneField.current.value = user.phoneNumber}}  disabled={useSelector((state) => state.client.loading)}>Reset</Button></div>
                {/* <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}><input type={'submit'}/><input type={'reset'}/></div> */}
            </form>
        </Box>
    )
}