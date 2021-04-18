import './App.css';
import GmailBody from './Components/GmailBody/GmailBody';
import Header from './Components/Header/Header';
import Sidebar from './Components/SideBar/Sidebar';
import Layout from './Layout/Layout';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Mail from './Components/Mail/Mail';

function App() {
  return (
    <div className="app">
      <Header/>
      <Layout>
        <Sidebar/>
          <GmailBody/>
      </Layout>
    
    </div>
  );
}

export default App;
