import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

export default function Loading() {
    const loading = useSelector((state) => state.client.loading)
    return (
        <div style={{display: loading ? 'flex' : 'none', position: 'fixed', height: '100vh', width: '100vw', backgroundColor: '#FFFFFFDD', zIndex: 1100, justifyContent: 'center', alignItems: 'center'}}>
            <CircularProgress />
        </div>
    )
}