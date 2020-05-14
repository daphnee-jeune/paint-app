import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import randomColor from 'randomcolor'

const Playground = () => {
  const [count, setCount] = useState(30)
  
  const inputRef = useRef()
  
  const [color, setColor] = useState(randomColor())
  
  const cb = useCallback(num => console.log(num), [count])
  
  return (
    <div style={{ borderTop: `30px solid ${color}`}}>
      <Calculate cb={cb} num={count} />
    </div>
  )
}

const Calculate = React.memo(({ cb, num }) => {
  cb(num)
  const renderCount = useRef(1)
  return <div>{renderCount.current++}</div>
})

export default Playground