import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './view/Layout';
import Home from './view/Home';
import About from './view/About';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />
        </Route>

     </Routes>
    </div>
  );
}

export default App;
