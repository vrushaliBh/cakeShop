import {Component} from "react"
import axios from "axios"

class Signup extends Component{
    constructor(){
        super()
        this.state ={
          
        }
    }
    user = {}

    getEmail =(event)=>{
        this.user.email = event.target.value
    }
    getName =(event)=>{
        this.user.name = event.target.value
    }
    getPassword = (event)=>{
        this.user.password = event.target.value
    }
    register = ()=>{
        if(!this.user.email || !this.user.password || !this.name){
            this.setState({
                errorMessage:"Please Fill Details"
            })
        }
        else{
            let apiurl ="https://apibyashu.herokuapp.com/api/register"    
            axios ({
                url:apiurl, method:"post", data:this.user
            }).then((response=>{
                console.log("register success")
            }),
            (error=>{ console.log("failed")}))
        }
        console.log("...... user details" , this.user)
       
       
    }
    render(){
        return(
            <div style={{width:"50%" , margin:"auto"}}>
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={this.getEmail}></input>
                </div>
                <div className="form-group">
                    <label>Name</label>
                <input type="email" class="form-control" onChange={this.getName}></input>
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={this.getPassword}></input>
                </div>
                <div style={{color:"red"}}>
                    {this.state.errorMessage}
                </div>
                <div style={{color:"green"}}>
                    {this.state.successMessage}
                </div>
              <button className="btn btn-primary" onClick={this.register}>Register</button>
            </div>
        )
    }
}
export default Signup