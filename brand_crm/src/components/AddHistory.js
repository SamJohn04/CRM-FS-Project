import { Box, Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { addMessage, updateUser } from "../redux/clientSlice";

export default function AddHistory() {
    const user = useSelector((state) => state.client.user)
    const loading = useSelector((state) => state.client.loading)
    const titleField = useRef()
    const bodyField = useRef()
    const linkTextField = useRef()
    const linkURLField = useRef()
    const dispatch = useDispatch()
    if(user.uID === null)
        return <Navigate to={'/'}/>
    return (
        <Box>
            <form className="add-client-box">
                <TextField label="Subject" fullWidth type={"text"} inputRef={titleField}/>
                <TextField label="Description" fullWidth multiline inputRef={bodyField}/>
                <div><TextField label="Link URL" fullWidth type={"url"} inputRef={linkURLField}/><TextField label="Link Text" fullWidth type="text" inputRef={linkTextField}/></div>
                <div style={{display: "flex", justifyContent: "center", gap: "2rem"}}><Button onClick={() => {dispatch(addMessage({user ,message:{title: titleField.current.value, body: bodyField.current.value, linkURL: linkURLField.current.value, linkText: linkTextField.current.value}}));}} disabled={loading} >Add</Button><Button onClick={() => {titleField.current.value = bodyField.current.value = linkURLField.current.value = linkTextField.current.value = ''}}  disabled={loading}>Reset</Button></div>
            </form>
        </Box>
    )
}