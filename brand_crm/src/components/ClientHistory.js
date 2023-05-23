import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Fab } from "@mui/material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";

export default function ClientHistory() {
    const user = useSelector((state) => state.client.user);
    const history = []
    for(let index = 0; index < user.clientHistory.messages.length; index++) {
        let message = user.clientHistory.messages[index];
        history.push(<div className="history-message" style={{textAlign:'start'}}><div><h3>{message.title}</h3></div><div style={{whiteSpace: 'pre'}}>{message.body}</div><div style={{borderTop: '1px dotted black'}}><a href={message.linkURL}>{message.linkText}</a></div></div>)
    }
    if(user.uID === null)
        return <Navigate to={'/'}/>
    return (
        <div>
            <div className="client-head"><h2>Your history with {user.name}</h2></div>
            <div className = "add-button"><Link to="/history/new"><Fab color="primary" aria-label="add"><Add /></Fab></Link></div>
            {
                user.clientHistory.messages.length === 0?
                    <div className="null-box"><h2>No history logged yet</h2></div>
                    :
                    <div className="null-box">
                        { history }
                    </div>
            }
            
        </div>
    )
}