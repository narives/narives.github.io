import './App.css';
import { useState } from 'react';
import Square from './Components/Square';
import EmptySquare from './Components/EmptySquare';
import PlayerInfo from './Components/PlayerInfo';
import Dice from './Components/Dice';

function App() {

  const board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  return (
    <div className="App">
      <PlayerInfo />
      <div className='board'>
        <span><Square val = {board[12]}/></span>
        <span><Square val = {board[13]}/></span>
        <span><Square val = {board[14]}/></span>
        <span><Square val = {board[15]}/></span>
        <span><Square val = {board[16]}/></span>
        <span><Square val = {board[17]}/></span>
        <span><Square val = {board[18]}/></span>
        <span><Square val = {board[19]}/></span>
        <span><Square val = {board[11]}/></span>
        <span className='item1'><EmptySquare><Dice></Dice></EmptySquare></span>
        <div><Square val = {board[20]}/></div>
        <div><Square val = {board[10]}/></div>
        <div><Square val = {board[21]}/></div>
        <div><Square val = {board[12]}/></div>
        <div><Square val = {board[13]}/></div>
        <div><Square val = {board[14]}/></div>
        <div><Square val = {board[15]}/></div>
        <div><Square val = {board[12]}/></div>
        <div><Square val = {board[13]}/></div>
        <div><Square val = {board[14]}/></div>
        <div><Square val = {board[15]}/></div>
        <div><Square val = {board[12]}/></div>
        <div><Square val = {board[13]}/></div>
        <div><Square val = {board[14]}/></div>
        <div><Square val = {board[15]}/></div>
      </div>
    </div>
  );
}
export default App;
