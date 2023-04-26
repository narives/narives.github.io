import './App.css';
import { useState } from 'react';
import Square from './Components/Square';
import EmptySquare from './Components/EmptySquare';

function App() {

  const board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square val = {board[12]}/>
          <Square val = {board[13]}/>
          <Square val = {board[14]}/>
          <Square val = {board[15]}/>
          <Square val = {board[16]}/>
          <Square val = {board[17]}/>
          <Square val = {board[18]}/>
          <Square val = {board[19]}/>
       </div>
        <div className='row'>
          <Square val = {board[11]}/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <Square val = {board[20]}/>
        </div>
        <div className='row'>
          <Square val = {board[10]}/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <Square val = {board[21]}/>
        </div>
        <div className='row'>
          <Square val = {board[9]}/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <Square val = {board[22]}/>
        </div>
        <div className='row'>
          <Square val = {board[8]}/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <EmptySquare/>
          <Square val = {board[23]}/>
        </div>
        <div className='row'>
          <Square val = {board[7]}/>
          <Square val = {board[6]}/>
          <Square val = {board[5]}/>
          <Square val = {board[4]}/>
          <Square val = {board[3]}/>
          <Square val = {board[2]}/>
          <Square val = {board[1]}/>
          <Square val = {board[0]}/>
       </div>
      </div>
    </div>
  );
}
export default App;
