import React from 'react'
import './Body.css'
import Header from './Header'

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src="https://i1.sndcdn.com/artworks-000848335759-j46war-t500x500.jpg" alt=""/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>
                </div>
            </div>
        </div>
    )
}

export default Body
