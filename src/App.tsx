import { useState } from 'react'
import reactLogo from './assets/react.svg';
import View from './view' ;
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log( <p>
    123
  </p>)

  return (
    <div className="App">
      <div className="card">
      </div>
      <View></View>
    </div>
  )
}

export default App
