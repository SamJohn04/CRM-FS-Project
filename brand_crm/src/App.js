import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddClient from './components/AddClient';
import ClientCard from './components/ClientCard';
import ClientHistory from './components/ClientHistory';
import Header from './components/Header';
import EditClient from './components/EditClient';
import AddHistory from './components/AddHistory';
import UserAlert from './components/UserAlert';

function App() {
  return (
    <div className='App'>
      <UserAlert />
      <Header/>
      <Routes>
        <Route path = "/" element = {<ClientCard />} /> 
        <Route path = "/new" element = {<AddClient />} /> 
        <Route path='/edit' element = {<EditClient />} />
        <Route path = '/history' element = {<ClientHistory />} />
        <Route path='/history/new' element = {<AddHistory />} />
      </Routes>
    </div>
  );
}

export default App;
