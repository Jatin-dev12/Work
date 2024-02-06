
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from '../'


function App() {
  return (
    <BrowserRouter >

    <Routes>

      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="services" element={<Services />} />
        <Route path="Portfolio" element={<Portfolio/>} />
        <Route path="About" element={<About />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    
    </Routes>
  </BrowserRouter>

  );
}

export default App;
