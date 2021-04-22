import {useState,useEffect} from "react"
import axios from "axios"
import { withRouter } from "react-router"
import { connect } from "react-redux"
function Register(props)
{

   
	
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
    let getName=(event)=>
    {
        setUser({
            // email:user.email,
            ...user,
            password:event.target.value,
        })
        
    	user.name = event.target.value
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
        var patternemail = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
        
        if(!element.password.value){
            errors.password="password is required"
        }
        if(!element.email.value){
            errors.email="email is required"
        }
       
        else if (!patternemail.test(element.email.value)) {
            errors.email = "Please enter valid email.";
        }
        if(!element.name.value){
            errors.name="name is required"
        }  
        var errorkeys=Object.keys(errors)
        if(errorkeys.length>0){
            return errors
        }
        else
            return false
    }  
    let register = ()=>{
        

      var form=document.getElementById('registerform');
            console.log(form.elements);
            var errors = validate(form.elements)
        if(errors){
            setFormrrors(errors)
        }
        else{
            setFormrrors({})
            let apiurl="https://apibyashu.herokuapp.com/api/register"
              axios({
                    url:apiurl,
                    method:"post",
                    data:user
              }).then((response)=>{
                  
                  if(response.data.token)
                  {
                  localStorage.token=response.data.token
                  localStorage.email=response.data.email
                
                    props.history.push('/login')
                    setErrorMessage("Register Successfully")
                    //props.informlogin("Vrushali bhadane")
                  }else
                  {
                    setErrorMessage("Invalid data")
                  }
              },(error)=>{
                  console.log("Error from  api",error)  
              })
          
        }
      }
	
		return(
            
			<div style={{width:"50%" , margin:"auto"}} className="col-md-6">
        <form id="registerform">
              <h2> Rgister </h2>
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control"  name="email" onChange={getEmail}></input>
                   { user && <label>{user.email}</label> }  
                   <div className='form-error' >
                            {formerrors?.email && <div>{formerrors.email}</div>}
                   </div>
                </div>
                <div className="form-group">
                    <label>Name</label>
                <input  class="form-control"  name="name" onChange={getName}></input>
                   { user && <label>{user.name}</label> }  
                   <div className='form-error' >
                            {formerrors?.name && <div>{formerrors.name}</div>}
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
        </form>       
              <button className="btn btn-primary" onClick={register}>Register</button>
      </div>
		)
	
}

export default Register;