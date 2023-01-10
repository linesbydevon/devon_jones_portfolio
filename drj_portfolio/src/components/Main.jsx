import {Routes,Route} from 'react-router-dom'
import Resume from './Routes/Resume'
import Projects from './Routes/Projects'
import Home from './Routes/Home'

export default function Main(){
  return(
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </main>
  )
}