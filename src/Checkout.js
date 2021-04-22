
import {BrowserRouter as Router, Redirect, Route} from 'react-router';
import Address from "./Address";
import CartSummary from "./CartSummary";
import Payment from "./Payment";
import Order from "./Order"; 
import {useRouteMatch, Link } from "react-router-dom";
function Checkout(props){
    var route=useRouteMatch()    
    var url=route.url     
    var path=route.path 
    var token=localStorage.token;
   console.log(route)
    if(token){
               
            return(
            
                <div className="card"><div class="card-body">
                <h1 class="card-title text-center">Checkout</h1>
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="nav flex-column">
                    <Link to={url}><li className="nav-item navbar-toggle" style={{marginBottom:"5px"}}><button className="btn-warning btn navbar-toggle collapsed " style={{minWidth:"100px"}}>cart</button></li></Link>
                    <Link to={url+'/address'}><li className="nav-item navbar-toggle" style={{marginBottom:"5px"}}><button className="btn-warning btn navbar-toggle collapsed" style={{minWidth:"100px"}}>Address</button></li></Link>
                    <Link to={url+'/payment'}><li className="nav-item navbar-toggle" style={{marginBottom:"5px"}}><button className="btn-warning btn navbar-toggle collapsed" style={{minWidth:"100px"}}>Payment</button></li></Link>
                <Link to={url+'/order'}><li className="nav-item navbar-toggle" style={{marginBottom:"5px"}}><button className="btn-warning btn navbar-toggle collapsed" style={{minWidth:"100px"}}>Order</button></li></Link>
                    </ul>
                    </div>
                <div className="col-sm-9">
                <switch>
                
                
                <Route exact path={path}  component={CartSummary} />
                <Route exact path={path+'/address'}  component={Address} />
                <Route exact path={path+'/payment'}  component={Payment} />
                <Route exact path={path+'/order'}component={Order} />
            </switch></div> </div></div></div>
        )
    } else{
        return <Redirect to='/'  />
    }
}



    
    export default Checkout///removecakefromcart
   // Post
    //{email,cakeid}
