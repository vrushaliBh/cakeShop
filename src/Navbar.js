import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function Navbar(props){
   console.log('..................Props.',props)
   let search = function(event){
        
    event.preventDefault();
     
    let url="/search?q="+document.getElementById('txtsearch').value;
   
    props.history.push(url)
    //event.preventDefault()
   }

   var logout =(event)=>{
      event.preventDefault()
    props.dispatch({
      type:'LOGOUT',
      
  })
  
   }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"> <a className="navbar-brand" >My Cakes</a></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      {props.user &&<a className="nav-link" > Welcome {props.user} </a>}
      </li>
      
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" >Action</a>
          <a className="dropdown-item" >Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" >Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
       {
         props.loginstatus ?   
         <Link to="/mycart"> <button className="btn btn-warning" style={{marginRight:"10px"}}><FontAwesomeIcon icon={faShoppingCart} />({props.cart_count}) </button></Link> :
         <div></div>
        }
    
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" id="txtsearch" placeholder="Search" aria-label="Search"></input>
      <button onClick={search} className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div>
       {
         props.loginstatus ? <button onClick={logout} className="btn btn-danger" style={{marginLeft:"10px"}}>Logout</button>  
         : <Link to="/login"> <button className="btn btn-success" style={{marginLeft:"10px"}}>Login</button></Link> 
         
        }
    </div> 
        
  </div>
</nav>
    )
}

export default connect (function(state,props) {
  console.log('...initioal state',state)
return {
        user:state?.user?.name,
        loginstatus:state?.islogin,
        cart_count:state?.cart_count

}
})(Navbar)