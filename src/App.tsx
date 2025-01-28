import './pages/viagens/Viagens'
import Viagens from './pages/viagens/Viagens'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/home/Home'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>


  )
}

export default App
