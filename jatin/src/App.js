import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home'
import Work from './Pages/Work'
import List from './Pages/List'
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter >

    <Routes>

      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="Work" element={<Work />} />
        <Route path="List" element={<List/>} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Route>
    
    </Routes>
  </BrowserRouter>

  );
}

export default App;
