import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Login from "./Login";
import {useState} from 'react';
import Cakedetails from './Cakedetails';
import Search from './Search';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
//import { Route } from 'react-router';
import axios from "axios"
import { get } from 'jquery';
import { connect } from "react-redux"
import CartProduct from './CartProduct';
import Checkout from './Checkout';
import Register from './Register';


function App(props) {
  if(localStorage.token && !props.user) {
    
    var count=0
    var token = localStorage.token
    axios({
      methis:get,
      url:'https://apibyashu.herokuapp.com/api/getuserdetails',
      headers:{
        authtoken:token
      }
    
    }) .then((response)=>{
      props.dispatch({
          type:'INITIAL_USER',
          payload : response.data.data
      })
        console.log("user detail",response)    
    },(error)=>{
      console.log("user detail error",error)
    } )
   
}

if(localStorage.token && !props.cart_count) {
    
  var count=0
  var token = localStorage.token
  
  axios({
    url:'https://apibyashu.herokuapp.com/api/cakecart',
    method:"Post",
    data:{},
    headers:{
      authtoken:token
    }
}).then((response)=>{
    console.log("response from cart api" ,response.data)
   
    { response.data.data?.length > 0 ? response.data.data.map((each, index)=>{
       count++;
       props.dispatch({
        type:'CART_ITEM',
        payload : count
    })
     }) : count=count
 }  

},(error)=>{
    console.log("error from cart api",error)
})
}
//var [user,setuser ]=useState()
//var [loginstatus,setloginstatus ]=useState(false)
// function LoginDone(data)  {
//   setuser(data)
//   setloginstatus(true)
// }
  return (
   <div className="app">
     {/* <Navbar loginstatus={loginstatus} user={user}/>
     <SignUp />
     <Login informlogin={LoginDone} />
     <Home />
     <Search/>
    <Cakedetails/> */}
    <Router><Route  component={Navbar} />
    {/* //<Navbar loginstatus={loginstatus} user={user} component={Navbar}></Navbar> */}
    <switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/login"  component={Login} ></Route>
      <Route exact path="/register"  component={Register} ></Route>
      <Route exact path="/singup"  component={SignUp} />
      <Route  path="/search"  component={Search} />
      <Route exact path="/mycart"  component={CartProduct} />
      <Route exact path="/cake/:cakeid"  component={Cakedetails} />
      <Route  path="/checkout"  component={Checkout} />
      {/* <Route path='/*'>
          <Redirect to='/'></Redirect>
      </Route> */}
     </switch> 
    </Router>
   </div>
  );
}

export default connect (function(state,props) {
return {
        user:state?.user,
        cart_count:state?.cart_count

}
})(App)
