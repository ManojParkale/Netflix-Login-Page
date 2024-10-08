import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>z
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
