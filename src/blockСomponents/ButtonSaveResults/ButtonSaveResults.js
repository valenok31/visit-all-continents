import React from 'react'


const ButtonSaveResults = (props) => {
    return <button onClick={() => {
        if(props.unique(props.queueContinents).length == 6) props.setSaveResultsCont();
        props.setQueueСities([]);
        props.setTotalCost(0);
        props.setTotalCostArr([]);
        props.setChoosingCity(false);
        props.setQueueContinents([]);
    }}>{props.unique(props.queueContinents).length == 6 ? 'Save results and reset' : 'Reset'}
    </button>
}

export default ButtonSaveResults;