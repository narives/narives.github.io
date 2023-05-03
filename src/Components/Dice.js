import React from 'react'

function Dice() {
	const chosen = Math.floor(Math.random()*6+1)
	
  return (
    <div>
      <img className='diceImage' src='img/Dice.jpeg' />
    </div>
  )
}

export default Dice
