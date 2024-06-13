import './App.css';
import './components/css/LoginForm.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/js/Login';
import Home from './components/js/Home';
import CreateUser from './components/js/CreateUser';
import UpdateCar from './components/js/UpdateCar';
import UpdateUsers from './components/js/UpdateUsers';
import Navbar from './components/Navbar/Navbar';
import AddCar from './components/js/AddCar';
import CreateCar from './components/js/CreateCar';
import Sales from './components/js/Sales';
import OldSales from './components/js/OldSales';
import CarDetail from './components/js/CarDetail';
import DataGridTable from './components/js/DataGridTable';

function App(){

return(
<div className='App'>
  <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Home' element={<Home/>}/>        
        <Route path='CreateUser' element={<CreateUser/>}/>
        <Route path='UpdateUsers' element={<UpdateUsers/>}/>
        <Route path='UpdateCar' element={<UpdateCar/>}/>
        <Route path='AddCar' element={<AddCar/>}/>
        <Route path='CreateCar' element={<CreateCar/>}/>        
        <Route path='Sales' element={<Sales/>}/>
        <Route path='OldSales' element={<OldSales/>}/>
        <Route path='CarDetail' element={<CarDetail/>}/>
        <Route path='DataGridTable' element={<DataGridTable/>}/>
      </Routes>
      </BrowserRouter>  
      <footer className='footer'>
        <label>
          <a href='https://codingarchive.com/'>Coding Archive</a>
        </label>
      </footer>
</div>
)

};
export default App;