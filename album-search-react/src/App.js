
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Album from './Components/Album/Album';
import Container from './Components/Container/Container';
import {useSelector} from 'react-redux'
import Header from './Components/Header/Header';


function App() {

  return (
    <div className="app">
        <Navbar/>
        <Header/>
        <Container/>
    </div>
  );
}

export default App;
