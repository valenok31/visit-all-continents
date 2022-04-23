import React from "react";
import loadingImg from './loading.png'

const Loading = (props) => {
    return <>
    <div>
        <img src={loadingImg} alt='loading'/>
    </div>
    </>
}

export default Loading;