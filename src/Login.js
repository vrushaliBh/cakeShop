import {useState,useEffect} from "react"
import axios from "axios"
import { withRouter } from "react-router"
import { connect } from "react-redux"
import {Link } from "react-router-dom"
function Login(props)
{

    useEffect(()=>{
       
    },[])
	
    var [errorMessage,setErrorMessage]=useState()

    var [user,setUser]=useState({})

    let getEmail=(event)=>
    {
        setUser({
            ...user,
            email:event.target.value,
            //password:user.password,
        })
        
    	user.email = event.target.value
    }
    let getPassword=(event)=>
    {
        setUser({
            // email:user.email,
            ...user,
            password:event.target.value,
        })
        
    	user.password = event.target.value
    }
    var [formerrors,setFormrrors]=useState({})
    var validate = function(element){
        var errors={}
        var pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
        
        if(!element.password.value){
            errors.password="password is required"
        }
        if(!element.email.value){
            errors.email="email is required"
        }
       
        else if (!pattern.test(element.email.value)) {
            errors.email = "Please enter valid email.";
        }
          
        var errorkeys=Object.keys(errors)
        if(errorkeys.length>0){
            return errors
        }
        else
            return false
    }  
    let login = ()=>{
        

      var form=document.getElementById('loginform');
            console.log(form.elements);
            var errors = validate(form.elements)
        if(errors){
            setFormrrors(errors)
        }
        else{
            setFormrrors({})
            let apiurl="https://apibyashu.herokuapp.com/api/login"
              axios({
                    url:apiurl,
                    method:"post",
                    data:user
              }).then((response)=>{
                  console.log("Response from Login api",response.data)
                  if(response.data.token)
                  {
                  localStorage.token=response.data.token
                  localStorage.email=response.data.email
                
                    props.dispatch({
                        type:'LOGIN',
                        payload : response.data
                    })
                    props.history.push('/')
                    setErrorMessage("Login Successfully")
                    //props.informlogin("Vrushali bhadane")
                  }else
                  {
                    setErrorMessage("Invalid Login")
                  }
              },(error)=>{
                  console.log("Error from Login api",error)  
              })
          
        }
      }
	
		return(
            
			<div style={{width:"50%" , margin:"auto"}} className="col-md-6">
        <form id="loginform">
              <h2> Login Section </h2>
                
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={getEmail} name="email"></input>
                   { user && <label>{user.email}</label> }  
                   <div className='form-error' >
                            {formerrors?.email && <div>{formerrors.email}</div>}
                   </div>
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" name="password" onChange={getPassword}></input>
                   {user && <label>{user.password}</label> }
                   <div className='form-error' >
                            {formerrors?.password && <div>{formerrors.password}</div>}
                   </div>
                </div>
                <div style={{color:"red"}}>
                    {errorMessage}
                </div>
        </form>   <div className="row"><div className="col-sm-9">     
              <button className="btn btn-primary" onClick={login}>Login</button></div>
              <Link to="/register" className='form-error'> New User? </Link></div></div>
		)
	
}
Login =withRouter(Login)
export default connect()(Login);