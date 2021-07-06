import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'


function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src="https://i1.sndcdn.com/artworks-000848335759-j46war-t500x500.jpg" alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
            <div className="body__icons">
                <PlayCircleFilledIcon className="body__shuffle"/>
                <FavoriteIcon fontSize="large"/>
                <MoreHorizIcon />
            </div>
            {/* List of songs */}
        </div>
    </div>
    )
}

export default Body
