import { useState } from "react"
import {BrowserRouter as Router, Redirect, Route} from 'react-router';
import {useRouteMatch, Link } from "react-router-dom";
function Address(){

    var [formerrors,setFormrrors]=useState({})
    var validate = function(element){
        var errors={}
        var pattern = new RegExp(/^[0-9\b]+$/);
        if(!element.name.value){
            errors.name="name is required"
        }
        if(!element.address.value){
            errors.address="address is required"
        }
        if(!element.city.value){
            errors.city="city is required"
        }
        if(!element.phone.value){
            errors.phone="phone is required"
        }
       
        else if (!pattern.test(element.phone.value)) {
            errors.phone = "Please enter only number.";
        }else if(element.phone.value.length != 10){
            errors.phone = "Please enter valid phone number.";
        } 
        if(!element.pin.value){
            errors.pin="pin is required"
        }
        
       else if (!pattern.test(element.pin.value)) {
            errors.pin = "Please enter only number.";
        }else if(element.pin.value.length != 6){
            errors.pin = "Please enter valid pin number.";
        }    
        var errorkeys=Object.keys(errors)
        if(errorkeys.length>0){
            return errors
        }
        else
            return false
    }

    var placeOrder=function(){
        var form=document.getElementById('addform');
            console.log(form.elements);
            var errors = validate(form.elements)
        if(errors){
            setFormrrors(errors)
        }
        else{
            setFormrrors({})
            return <Redirect to='/checkout/payment'  />
        }
    }
    return(
        <div className="card" style={{margin:"20px,140px"}}>   
            <div className="card-body text-center" style={{backgroundColor: "rgb(249 209 87 / 68%)",margin:"30px"}}>
                <h1>Address</h1>
	         <form id="addform">   
                <div className="form-group  row">
	                <label class="col-sm-2 ">Name</label>
                    <div class="col-sm-10">
	                    <input name="name" id="name"  className="form-control" />
                   <div className='form-error' >
                            {formerrors?.name && <div>{formerrors.name}</div>}
                   </div>
                    </div>
                </div>
                <div class="form-group row">
	                <label class="col-sm-2 ">Phone</label>
                    <div class="col-sm-10">
	                    <input type="text" name="phone" id="phone" className="form-control" maxlength="10" />
                   <div className='form-error' >
                            {formerrors?.phone && <div>{formerrors.phone}</div>}
                   </div>
                    </div>
                </div>
                <div class="form-group row">
	                <label class="col-sm-2 ">Address</label>
                    <div class="col-sm-10">
	                    <input type="text" name="address" id="address" className="form-control"/>
                   <div className='form-error' >
                            {formerrors?.address && <div>{formerrors.address}</div>}
                   </div>
                    </div>
                </div>
                <div class="form-group row">
	                <label class="col-sm-2 ">City</label>
                    <div class="col-sm-10">
	                    <input type="text" name="city" id="city" className="form-control" maxlength="75" />
                   <div className='form-error' >
                            {formerrors?.city && <div>{formerrors.city}</div>}
                   </div>
                    </div>
                </div>
                <div class="form-group row">
	                <label class="col-sm-2 ">Pincode</label>
                    <div class="col-sm-10">
	                    <input type="text" name="pin" id="pincode" className="form-control"  />
                   <div className='form-error' >
                            {formerrors?.pin && <div>{formerrors.pin}</div>}
                   </div>
                    </div>
                </div>
                
           </form>    
           <div className=" text-center">      
           <button onClick= {placeOrder}  className="form-control btn btn-warning mr-sm-2" style={{width:"130px"}}>Proceed</button>
        </div>
            </div>
            </div>
        
)
    
}



    
    export default Address   ////recoverpassword post {email:""}
