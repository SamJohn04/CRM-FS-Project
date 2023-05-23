import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearAlert } from "../redux/clientSlice";

export default function UserAlert() {
    const userAlert = useSelector((state) => state.client.userAlert)
    const dispatch = useDispatch()
    if(userAlert) {
    setTimeout(()=>dispatch(clearAlert()), 3000)
        return (
            <Alert className="user-alert" severity={userAlert.success ? 'success' : userAlert.info ? 'info' : 'error'} onClose = {() => dispatch(clearAlert())}>{userAlert.message}</Alert>
        )
    }
    else
        return (
            <></>
        )
}