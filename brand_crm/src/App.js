import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddClient from './components/AddClient';
import ClientCard from './components/ClientCard';
import Header from './components/Header';
//import Loading from './components/Loading';
import EditClient from './components/EditClient';

function App() {
  return (
    <div className='App'>
      {/* <Loading/> */}
      <Header/>
      <Routes>
        <Route path = "/" element = {<ClientCard />} /> 
        <Route path = "/new" element = {<AddClient />} /> 
        <Route path='/edit' element = {<EditClient />} />
      </Routes>
    </div>
  );
}

export default App;
