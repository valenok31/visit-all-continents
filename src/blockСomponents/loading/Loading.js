import React from "react";
import loadingImg from './loading.png'
import style from "./Loading.module.css"

const Loading = (props) => {
    return <>
    <div>
        <img className={style.loadingImg} src={loadingImg} alt='loading'/>
    </div>
    </>
}

export default Loading;