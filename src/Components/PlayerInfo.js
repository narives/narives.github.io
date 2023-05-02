import React from 'react'

function PlayerInfo() {

  var player1_score = 0
  var player2_score = 0

  return (
    <div>
      <div className='playershowinfo1'>1번 플레이어 점수: {player1_score}</div>
      <div className='playershowinfo2'>2번 플레이어 점수: {player2_score}</div>
    </div>
  )
}

export default PlayerInfo
