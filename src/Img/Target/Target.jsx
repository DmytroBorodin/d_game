import React from "react";
import m from '../../Main/Main.module.css';
import {useDrop} from "react-dnd";
import {ItemsTypes} from "../../store/itemTipe";


const Target = (props) => {

    let trueAnswerAudio = React.useRef();
    let falseAnswerAudio = React.useRef();

    const [{isOver}, drop] = useDrop({
        accept: ItemsTypes.IMAGE,
        drop: (item, monitor) => props.setAnswer(item.id, item.audio),
        collect: monitor => ({
            isOver: !!monitor.didDrop(),
        })
    })
    let getItemId = (id) => {
        props.setAnswer(id);
    }
    if(isOver){
        let answerVal = props.answerVal;
        if (answerVal === true) {
            props.playAudio(trueAnswerAudio);
            props.reloadGame(answerVal);
        } else if(answerVal === false){
            props.playAudio(falseAnswerAudio);
        }
    }

    return (
        <div ref={drop} onClick={() => (getItemId(1))}
             className={m.main__img__block}>
            {props.answer}
            <audio onClick={() => props.playAudio} src={props.true} ref={trueAnswerAudio}></audio>
            <audio onClick={() => props.playAudio} src={props.false} ref={falseAnswerAudio}></audio>
        </div>
    )
};

export default Target;