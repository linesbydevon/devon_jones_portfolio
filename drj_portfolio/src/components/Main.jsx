import {Routes,Route} from 'react-router-dom'
import Resume from './Routes/Resume'

export default function Main(){
  return(
    <main>
      <Routes>
        <Route path="/" element={<Resume/>}/>
        <Route path="/projects" />
        <Route path="/resume" />
      </Routes>
    </main>
  )
}