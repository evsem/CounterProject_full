import React from 'react'
import './App.css'
import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
      <Counter propsCounter={{ title: 'Counter project' }} />
    </div>
  )
}

export default App
