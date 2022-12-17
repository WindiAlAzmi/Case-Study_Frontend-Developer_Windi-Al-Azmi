import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './view/Layout';
import Home from './view/Home';
import About from './view/About';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />

            <Route path="product/:id"  element={<ProductDetail />} />
        </Route>

     </Routes>
    </div>
  );
}

export default App;
