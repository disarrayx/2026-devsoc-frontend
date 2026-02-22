import './App.css'
import Navbar from './components/navbar'
import RoomCard from './components/room-card'
import { Search, Funnel, ArrowDownWideNarrow } from 'lucide-react';

// i am not importing allat
// https://stackoverflow.com/questions/73144686/is-there-a-way-to-import-a-folder-structure-in-vite
const images = import.meta.glob('./assets/*.webp', { eager: true }) as Record<string, { default: string }>;

function App() {
  return (
    <div id="main">
      <Navbar/>
      <div className="room-filter">
        {/* filter button */}
        <button className="filter-search">
          <Funnel/>
          <span>Filter</span>
        </button>

        {/* searchbar */}
        <div className="room-searchbar">
          <Search/>
          <input id="room-searchbar-input" type="search" placeholder="Search for a building..."></input>
        </div>

        {/* sort button */}
        <button className="filter-search">
          <ArrowDownWideNarrow/>
          <span>Sort</span>
        </button>
      </div>

      {/* rooms */}
      <div className="room-container">
        <RoomCard url={images['./assets/agsm.webp'].default} roomsFree={9} name="AGSM"/>
        <RoomCard url={images['./assets/ainsworth.webp'].default} roomsFree={16} name="Ainsworth Building"/>
        <RoomCard url={images['./assets/anitab.webp'].default} roomsFree={44} name="Anita B Lawrence Center"/>
        <RoomCard url={images['./assets/biologicalScience.webp'].default} roomsFree={6} name="Biological Sciences"/>
        <RoomCard url={images['./assets/biologicalScienceWest.webp'].default} roomsFree={8  } name="Biological Sciences (West)"/>
        <RoomCard url={images['./assets/blockhouse.webp'].default} roomsFree={42} name="Blockhouse"/>
        <RoomCard url={images['./assets/businessSchool.webp'].default} roomsFree={18} name="Business School"/>
        <RoomCard url={images['./assets/civilBuilding.webp'].default} roomsFree={8} name="Civil Engineering Building"/>
        <RoomCard url={images['./assets/colombo.webp'].default} roomsFree={5} name="Colombo Building"/>
        <RoomCard url={images['./assets/cseBuilding.webp'].default} roomsFree={7} name="Computer Science & Eng (K17)"/>
      </div>
    </div>
  )
}

export default App
