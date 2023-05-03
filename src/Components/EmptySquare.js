import React from 'react'

function EmptySquare({children}) {
  return (
    <div className='emptysquare'>
      <div className='maintext'>
        BOARDGAME
        {children}
      </div>
    </div>
  )
}

export default EmptySquare
