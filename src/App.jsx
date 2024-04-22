import { useState } from 'react'
import { RangeCalendar } from '@nextui-org/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RangeCalendar aria-label='Date (No Selection)' />
     



    </>
  )
}

export default App
