import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div style={{position:'fixed', top: 0, left: 0, padding: '0.5rem', backgroundColor: '#00000022', width: '100vw'}}>
            <Link to={'/'} className="logo-header">Brand</Link>
        </div>
    )
}