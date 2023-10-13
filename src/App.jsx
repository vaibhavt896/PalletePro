import { useState } from 'react'
import ColorSwatch from './ColorSwatch'

export default function App() {
  const[color, setColor] = useState("")

  function onSelectColor(e){
    setColor(e)
  }
  return (
    <div >
    <div className ="top-bar">
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand d-flex flex-row " href="#">
      <img src="src//assets/logo.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top border rounded-5" />
      <h1  className='mx-2'>PalettePro</h1>
    </a>
  </div>
</nav>
      <ColorSwatch onSelectColor={onSelectColor} />

      <div style={{ backgroundColor: color, width: '100%', height: '100vh' }}>
      </div>

      <p className='selected-color'>
Hex Code : {color}

      </p>
      </div>
    </div>
  )
}
