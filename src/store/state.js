import happy from '../assets/images/happy.png';
import fast from '../assets/images/fast.png';
import fast_audio from '../assets/sounds/fast.mp3';
import question_audio from '../assets/sounds/question.mp3';
import happy_audio from '../assets/sounds/happy.mp3';
import {rerender} from "../index";
import true_answer from '../assets/sounds/true_answer.mp3';
import false_answer from '../assets/sounds/try_again.mp3';

const state = {
    imgsArr: [],
    answer: {
        id: '',
        imgLink: fast,
        audioLink: fast_audio,
        answer: true,
    },
    trueAnswerAudio: true_answer,
    falseAnswerAudio: false_answer,
    mainImg: {
        id: 0,
        imgLink: happy,
        audioLink: happy_audio,
    },
    playGameBtn: {
        audioLink: question_audio,
    }
};

export let setAnswer = (id) => {
    state.imgsArr.forEach(img => {
        if (img.id === id && img.answer === true) {
            let answer = img;
            state.answer = answer;
            rerender();
            state.answer = {};
            console.log(state.answer);
            setTimeout(rerender, 4000);
        }else {
            state.answer.answer = false;
        }
    })
}

export let setUsers = (arr) => {
    state.imgsArr = arr;
    rerender();
}

export let reloadGame = (answerVal) => {
    return;
}
setAnswer(2);
export default state;