import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </div>
  );
}

export default App;
