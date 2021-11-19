import React from 'react';
import style from './App.module.scss';
import {ContainerScoreboard} from "./components/scoreboard/ContainerScoreboard";

function App() {
    return (
        <div className={style.App}>
            <div className={style.title}><h1>Picture-album</h1></div>
            <ContainerScoreboard/>
        </div>
    );
}

export default App;
