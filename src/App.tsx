import {FC} from 'react';
import style from './App.module.scss';
import {Scoreboard} from "./components/scoreboard/Scoreboard";

export const App: FC = () => {
    return (
        <div className={style.App}>
            <div className={style.title}>
                <h1>Picture-album</h1>
            </div>
            <Scoreboard/>
        </div>
    );
}