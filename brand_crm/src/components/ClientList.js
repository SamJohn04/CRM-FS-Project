import { AccountCircle, Search } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { selectCard } from "../redux/clientSlice"
import { InputAdornment, TextField } from "@mui/material"
import { useState } from "react"

export default function ClientList({setModalState}) {
    const dispatch = useDispatch()
    const [keyword, setKeyWord] = useState('')
    const currentUser = useSelector((state) => state.client.user)
    const users = useSelector((state) => state.client.users)
    const userBoxes = []
    for(let index = 0; index < users.length; index++) {
        let user = users[index];
        if(user.name.toUpperCase().includes(keyword.toUpperCase()) || user.email.toUpperCase().includes(keyword.toUpperCase()))
            userBoxes.push(<div className="user-box" style={{backgroundColor: user.uID === currentUser.uID ? "#23004630" : ""}} key={user.uID} onClick={()=>{dispatch(selectCard(user.uID)); setModalState(false);}}><div>{user.userIcon?<img src={user.userIcon} className="user-icon" alt={'user icon'}/>:<AccountCircle className="user-icon"/>}</div><div>{user.name}</div><div className="new-alert" style={{display: user.clientHistory.messages.unread.length === 0 ? "none" : "block"}}/></div>
    )}
    return (
        <div className="client-list">
            <div>
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    )
                }}
                variant="standard"
                onChange={(e) => setKeyWord(e.target.value)}/>
            </div>
            {userBoxes}
        </div>
    )
}