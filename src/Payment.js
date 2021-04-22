
import {Link } from "react-router-dom";
function Payment(props){
    return(
        <div>
        
            <div className="card card-body shadow p-3 mb-5 bg-white rounded">
           
           
            <div className="">
                <h5>Select Payment method</h5>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios"  value="option1" checked />
                    <label class="form-check-label" for="exampleRadios1">
                        COD
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" value="option2"/>
                    <label class="form-check-label" for="exampleRadios2">
                        Debit Card
                    </label>
                    </div>                
            </div>   
            
            </div>
           
              
            <div className=" text-center">      
<div><Link to="/checkout/order"> <button className="btn btn-warning" >Proceed </button></Link></div>
        </div></div>
)
    
}



    
    export default Payment