import React, { useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user_data, setUserData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      res => res.json
    ).then(
      data => {
        setUserData(data)
      }
    )
  }, [])

  return <h1> {user_data}</h1>
}

export default App
