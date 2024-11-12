

import { useRef } from 'react'
import './App.css'
import Container from './Components/Container'

function App() {
  
  let droupRef = useRef(null)

  let handleDroup =()=>{
// console.log(droupRef.current);
// droupRef.current.style.display= 'block'
if (droupRef.current.style.display== 'block') {
  droupRef.current.style.display= 'none'
} else {
  droupRef.current.style.display= 'block'
}

  }

  return (
    <>
     <Container className={'bg-cyan-400 py-24'}>
      <div onClick={handleDroup}>
        <button className='py-4 px-8 bg-slate-600 rounded-lg text-white font-serif'>Click</button>

      <div className={'bg-green-400 hidden font-extrabold items-center mr-80  '} ref={droupRef}>
     <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
      </ul>
     </div>

      </div>
   
     </Container>
    
     
    </>
  )
}

export default App
