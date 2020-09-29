import React, { useState } from 'react';
import cors from 'cors';
import './Home.css'
import Song from './Song';

function Home() {
    const [songs, setSongs]=  useState([]);
    const [input, setInput]= useState("");
   
    const sendMessage= async (e) => {
        e.preventDefault();
        console.log(input);
        await fetch(`https://itunes.apple.com/search?term=${input}`)
        .then(res => res.json())
        .then(json => {
            console.log(json.results);
            setSongs(json.results);
        })
        setInput("");
    };
    return (
        <div className="home">
            <form>
                <input value={input} onChange = {(e)=> setInput(e.target.value)} placeholder="Search a Song" type="text"/>
                <button onClick={sendMessage} type="submit">Search</button>
            </form>
            <div className="home_songs">
                {songs.map(song => (
                    <Song key={song.trackId} image={song.artworkUrl100} name={song.trackCensoredName} artist ={song.artistName} year={song.releaseDate} />
                ))}
            </div>
        </div>
    )
}

export default Home
