//import logo from './logo.svg';
//import './App.css';
//import Exm from './Exm';
//import Practice1 from './practice1';
//import Practice2 from './Practice2';
//import Todo from './Todoapp';
//import ImageSearch from './imagesearch'; 
//import ImageSearchkn from './imagesearchkn';
import Weather from './Weather'
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom';





function App() {    
  return (
   
    <BrowserRouter>

     <Link to="/search">weather</Link> 
     <Routes>
         <Route path='search' element={<Weather></Weather>}></Route>
      
      </Routes> 

    </BrowserRouter>
  );
}

export default App;
