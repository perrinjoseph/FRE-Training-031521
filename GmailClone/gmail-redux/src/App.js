import './App.css';
import GmailBody from './Components/GmailBody/GmailBody';
import Header from './Components/Header/Header';
import Sidebar from './Components/SideBar/Sidebar';
import Layout from './Layout/Layout';
import NewMail from './Components/NewMail/NewMail';
import {useSelector} from 'react-redux'


function App() {
  const show = useSelector(store=>store.mailState.create);

  return (
    <div className="app">
      <Header/>
      <Layout>
        <Sidebar/>
        <GmailBody/>
        {show===true &&(<NewMail />)}
      </Layout>
    </div>
  );
}

export default App;
