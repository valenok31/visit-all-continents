import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./GameRules.module.css";

const GameRules = (props) => {
    return <>
        <div>
            <NavLink to='/' className={style.nLink}>
                <div>Home</div>
            </NavLink>
        </div>

        <div className={style.game_rules}>The rules of the game are very simple. You need to visit all continents by the cheapest route. You can
            start from any city. The city can be visited only once. It is not necessary to visit all cities, the main
            thing is to visit all six continents. Good luck!
        </div>
        <div className={style.game_rules}>Правила игры очень простые. Нужно посетить все континенты самым дешевым маршрутом. Стартовать можно из
            любого города. Город можно посетить только один раз. Не обязательно посещать все города, главное посетить
            все шесть континентов. Удачи!
        </div>
        <div className={style.game_rules}>Die Regeln des Spiels sind sehr einfach. Sie müssen alle Kontinente mit der billigsten Route besuchen. Sie
            können von jeder Stadt aus starten. Die Stadt kann nur einmal besucht werden. Es ist nicht notwendig, alle
            Städte zu besuchen, die Hauptsache ist, alle sechs Kontinente zu besuchen. Viel Glück!
        </div>
        <div className={style.game_rules}>Las reglas del juego son muy simples. Es necesario visitar todos los continentes por la ruta más barata.
            Puedes comenzar desde cualquier ciudad. La ciudad solo se puede visitar una vez. No es necesario visitar
            todas las ciudades, lo principal es visitar los seis continentes. ¡Mucho éxito!
        </div>
    </>
}

export default GameRules;
