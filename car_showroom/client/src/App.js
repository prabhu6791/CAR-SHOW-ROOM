import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Login from './components/userlog';
import Faqs from './components/faq';
import Main from './components/main';
import Inventary from './components/inventary/inventary';
import Supplier from './components/supplier/dash-supplier';
import Seller from './components/seller/dash-seller';
import Registers from './components/createnewaccount/newaccnav';
import Result from './components/inventary/result';
import Forget from './components/createnewaccount/forgetpass';
import Profile from './components/fletch/cus_profile';

export default class App extends React.Component{
  render(){
    return(
      <>
      <BrowserRouter>
      <Routes>
        
        {/* login page */}
            <Route path='/' element={<Login/>}/>
            <Route path='/newaccnav' element={<Registers/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/forgetpass' element={<Forget/>}/>
            <Route path='/cus_profile' element={<Profile/>}/>

        {/* login page */}

        {/* supplier Dashboard */}
            <Route path='/dash-supplier' element={<Supplier/>}/>
        {/* supplier Dashboard */}
        
        {/* Dash_seller */}
            <Route path='/dash-seller' element={<Seller/>}/>
            <Route path='/inventary' element={<Inventary/>}/>
        {/* Dash_seller */}

        {/* Customer */}
            <Route path='/main' element={<Main/>}/> 
            <Route path='/faq' element={<Faqs/>}/>
            <Route path='/userlog' element={<Login/>}/> 
        {/* Customer */}

      </Routes>
      </BrowserRouter>       
      </>
    )
  }
}

