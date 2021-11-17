import React from 'react';
import style from './App.module.scss';
import {Scoreboard} from "./components/Scoreboard/Scoreboard";

function App() {
    return (
        <div className={style.App}>
            <div className={style.title}><h1>Picture-album</h1></div>
            <Scoreboard/>
        </div>
    );
}

export default App;
