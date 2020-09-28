import React from "react";
import m from './Main.module.css';
import Img from "../Img/Img";
import Target from "../Img/Target/Target";
import sad from "../assets/images/sad.png";
import sad_audio from "../assets/sounds/sad.mp3";
import small from "../assets/images/small.png";
import small_audio from "../assets/sounds/small.mp3";
import slow from "../assets/images/slow.png";
import slow_audio from "../assets/sounds/slow.mp3";
import short from "../assets/images/short.png";
import fast from "../assets/images/fast.png";
import fast_audio from "../assets/sounds/fast.mp3";
/*import * as axios from "axios" ;*/

class  Main extends React.Component {

    /*
    method to work with JASON object
    componentDidMount() {
        axios.get(``).then(response => {
            this.props.setUsers(response.data);
        })
    }*/

    render () {
        if (this.props.state.imgsArr.length == 0) {
            this.props.setUsers([
                {
                    id: 1,
                    imgLink: sad,
                    audioLink: sad_audio,
                    answer: true,
                },
                {
                    id: 2,
                    imgLink: small,
                    audioLink: small_audio,
                    answer: false,
                },
                {
                    id: 3,
                    imgLink: slow,
                    audioLink: slow_audio,
                    answer: false,
                },
                {
                    id: 4,
                    imgLink: short,
                    audioLink: sad_audio,
                    answer: false,
                },
                {
                    id: 5,
                    imgLink: fast,
                    audioLink: fast_audio,
                    answer: false,
                }
            ])
        };
        let playBtnAudio = React.createRef();

        let playAudio = (audioObj) => {
            audioObj.current.play();
        }

        let answers = this.props.state.imgsArr.map(img => (<Img imgLink={img.imgLink} audioLink={img.audioLink} id={img.id} answer={img.answer} playAudio={playAudio}/>));

        let answer = answers.filter(img => img.props.id === this.props.state.answer.id);

        return (
            <div className={m.main}>
                <div className={m.home__btn}>
                    <span className="icon-home"></span>
                </div>
                <div className={m.play__btn} onClick={() => playAudio(playBtnAudio)}>
                    <span className="icon-play-button"></span>
                    <audio src={this.props.state.playGameBtn.audioLink} ref={playBtnAudio}/>
                </div>
                <div className={m.wrap}>
                    <div className={m.answer__block}>
                        <Img imgLink={this.props.state.mainImg.imgLink} audioLink={this.props.state.mainImg.audioLink} id={this.props.state.mainImg.id} playAudio={playAudio}/>
                        <Target playAudio={playAudio}
                                answer={answer}
                                setAnswer={this.props.setAnswer}
                                className={m.main}
                                true={this.props.state.trueAnswerAudio}
                                false={this.props.state.falseAnswerAudio}
                                answerVal={this.props.state.answer.answer}
                                reloadGame={this.props.reloadGame}
                        />
                    </div>
                    <div className={m.variants__block}>
                        {answers}
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;