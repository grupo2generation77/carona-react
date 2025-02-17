import Footer from './components/footer/Footer';
import './pages/viagens/Viagens'
import Viagens from './pages/viagens/Viagens'
import Navbar from './components/navbar/NavBar'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/home/Home'
import AboutUs from './pages/aboutus/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/viagens' element={<Viagens/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
