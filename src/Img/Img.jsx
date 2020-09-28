import React from "react";
import m from '../Main/Main.module.css'
import {useDrag} from "react-dnd";
import {ItemsTypes} from "../store/itemTipe";

const Img = (props) => {
    let newAudio = React.createRef();

    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemsTypes.IMAGE,
            id: props.id,
            audio: props.audioLink,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div className={m.img__block}>
            <img onMouseDown={() => (props.playAudio(newAudio))}
                 ref={drag} src={props.imgLink} answer={props.answer}/>
            <audio  ref={newAudio} src={props.audioLink}/>
        </div>
    )
}
export default Img;