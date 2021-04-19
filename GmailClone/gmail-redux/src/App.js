import './App.css';
import GmailBody from './Components/GmailBody/GmailBody';
import Header from './Components/Header/Header';
import Sidebar from './Components/SideBar/Sidebar';
import Layout from './Layout/Layout';
import NewMail from './Components/NewMail/NewMail';
import {useDispatch, useSelector} from 'react-redux'
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './Firebase/firebase';
import AllActions from './Redux/Actions';


function App() {
  const show = useSelector(store=>store.mailState.create);
  const user = useSelector(store=>store.userInformation.user)
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(AllActions.userActions.loginUser({uid:user.uid,email:user.email,photoURL:user.photoURL,userName:user.displayName}))
      }
    })
  },[])

  return (
    <div className="app">
      {Object.keys(user).length>0?
      (
        <>
            <Header/>
            <Layout>
              <Sidebar/>
              <GmailBody/>
              {show===true &&(<NewMail />)}
            </Layout>
        </>
      ):
      (
        <Login/>
      )}
      
    </div>
  );
}

export default App;
