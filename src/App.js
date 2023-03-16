import {useState} from 'react'
import { Selector, useDispatch, useSelector } from 'react-redux';
import {Home, Login, Public} from './containers/public/'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import path from './ultis/path';

function App() {
  return (
    <>
      <div className="">
        <Routes>  
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home/>}/>
            <Route path={path.LOGIN} element={<Login/>}/>
            <Route path={path.START} element={<Home/>}/>
          </Route>
        </Routes>
      </div>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </>
  );
}

export default App;
