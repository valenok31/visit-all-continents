import React from 'react'


const ButtonSaveResults = (props) => {
    return <button onClick={() => {
        if(props.unique(props.queueContinents).length == 6) props.setSaveResultsCont();
        props.resetResults();
    }}>{props.unique(props.queueContinents).length == 6 ? 'Save results and reset' : 'Reset'}
    </button>
}

export default ButtonSaveResults;