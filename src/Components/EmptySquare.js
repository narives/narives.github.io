import React from 'react'

function EmptySquare({children}) {
  return (
    <div className='emptysquare'>
      <div>
        {children}
      </div>
    </div>
  )
}

export default EmptySquare
