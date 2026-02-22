import './room-card.css'
import { useMediaQuery } from 'react-responsive'

interface RoomCardProps {
    url: string;
    name: string;
    roomsFree: number;
}

function RoomCard(props: RoomCardProps) {
    const isDesktop = useMediaQuery({ minWidth: 640 });
    return(
        isDesktop ? 
        <div className="card">
            <img className="room-image" src={props.url}/>
            <div className="room-details">
                <div className="room-available">
                    <div className="indicator-available"/>
                    <span>{props.roomsFree} rooms available</span>
                </div>
                <div className="room-name">
                    <span>{props.name}</span>
                </div>
            </div>

        </div>
        : 
        <div className="card">
            <img className="room-image" src={props.url}/>
            <div className="room-details">
                <div className="room-available">
                    <div className="indicator-available"/>
                    <span>{props.roomsFree} / {props.roomsFree}</span>
                </div>
                <div className="room-name">
                    <span>{props.name}</span>
                </div>
            </div>

        </div>
    )
}

export default RoomCard
