import React, {useEffect, useContext} from 'react';
import {BrowserRouter, Routes, Route, Navigate}   from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import CreatePage from './Pages/CreatePage';
import ViewPage from './Pages/ViewPage';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';


function App() {
  const {user, setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    // console.log(user);
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  console.log(user)
  return (
    
      <div className='main'>
        <Post>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={!user ? <SignupPage /> :  <Navigate to="/" />} />
          <Route path='/login' element={!user ? <LoginPage /> : <Navigate to="/" />} />
          <Route path='/create' element={user ? <CreatePage /> : <Navigate to="/login"/>} />
          <Route path='/view' element={<ViewPage />} />
            
          </Routes>
        </BrowserRouter>
        </Post>
      </div>
  );
}

export default App;
