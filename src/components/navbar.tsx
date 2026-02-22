import freeRoomsLogo from "../assets/freeRoomsLogo.png"
import freeroomsDoorClosed from "../assets/freeRoomsDoorClosed.png"
import './navbar.css'
import { Search, Grid2x2, Map, Moon } from 'lucide-react';
import { useState } from "react";


function Navbar() {
    const [open, setOpen] = useState(true);
    return(
        <nav>
            {/* logo */}
            <button id="logo" onClick={() => setOpen(!open)} >
                <img className="icon" src={open ? freeRoomsLogo : freeroomsDoorClosed}></img>
                <h1>Freerooms</h1>
            </button>
            {/* remaining buttons */}
            <div id="nav-container">
                <button className="nav-button"><Search/></button>
                <button className="nav-button active"><Grid2x2/></button>
                <button className="nav-button"><Map/></button>
                <button className="nav-button"><Moon/></button>
            </div>
        </nav>
    )
}

export default Navbar