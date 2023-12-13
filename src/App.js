
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Menusito } from './components/navegacion/Menusito';
import Inicio from './components/Paginas/Inicio';
import Acercade from './components/Paginas/Acercade';
import Menu from './components/Paginas/Menu';
import Bebidas from './components/Paginas/Bebidas';
import Fotters from './components/navegacion/Fotters';
import Video from './components/Paginas/Video';
import Pedidoonline from './components/Paginas/Pedidoonline'
import Blog from './components/Paginas/Blog';
import Reserva from './components/Paginas/Reserva';
import Nosotros from './components/Paginas/Nosotros';


function App() {
  return (
    <div className="App">
      <Router>
        <Menusito/>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/acercade' element={<Acercade/>}/>
          <Route path='/bebidas' element={<Bebidas/>}/>
          <Route path='/videos' element={<Video/>}/>
          <Route path='/menu' element={<Menu/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/reserva' element={<Reserva/>} />
          <Route path='/pedidoonline' element={<Pedidoonline/>}/>
        </Routes>
        <Fotters/>
      </Router>

    </div>
  );
}

export default App;
