import React from 'react'
import './Song.css'

function Song({image,name,artist,year}) {
    return (
        <div className="song">
          <div className="song_card">
                <img src={image} alt=""/>
                <div className="song_cardinfo">
                    <h3>Song Name : {name}</h3>
                    <h4>Artist Name : {artist}</h4>
                    <h5>Release Year : {year}</h5>
                </div>
          </div> 
        </div>
    )
}

export default Song
