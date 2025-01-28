import './pages/viagens/Viagens'
import Viagens from './pages/viagens/Viagens'
import './App.css'
import About_us from './pages/about_us/About_us'

function App() {

  return (
    <>
          <ToastContainer />
            <BrowserRouter>
                <Navbar />
                <div className="min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about_us" element={<About_us />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
    </>
  )
}

export default App
