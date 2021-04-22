
import {Link } from "react-router-dom";
function Order(props){
    return(
        <div>
        
        <div className="card card-body shadow p-3 mb-5 bg-white rounded">
       
       
        <div className="">
            <h5>Confirm your order</h5>
            <div className=" text-center">      
<div><Link to="/"> <button className="btn btn-warning" >Confirmed </button></Link></div>
    </div>   
        </div>   
        
        </div>
       
          
        </div>
)
    
}



    
    export default Order