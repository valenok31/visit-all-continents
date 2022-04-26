import React from 'react';
import style from "./GameRules.module.css";
import HomeNavLink from "../HomeNavLink/HomeNavLink";

const GameRules = (props) => {
    return <>
        <div>
            <HomeNavLink/>
        </div>
        <div className={style.game_rules}>Правила игры очень простые. Нужно посетить все континенты самым дешевым
            маршрутом. Стартовать можно из
            любого города. Город можно посетить только один раз. Не обязательно посещать все города, главное посетить
            все шесть континентов. Удачи!
        </div>
        <div className={style.game_rules}>The rules of the game are very simple. You need to visit all continents by the
            cheapest route. You can
            start from any city. The city can be visited only once. It is not necessary to visit all cities, the main
            thing is to visit all six continents. Good luck!
        </div>
    </>
}

export default GameRules;
