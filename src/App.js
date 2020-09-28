import React from 'react';
import './App.css';
import Main from "./Main/Main";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App(props) {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
          <Main setUsers={props.setUsers} state={props.state} reloadGame={props.reloadGame} setAnswer={props.setAnswer}/>
      </DndProvider>
    </div>
  );
}

export default App;
