import { useParams } from "react-router-dom";
import {useEffect , useState} from "react"; 
import axios from 'axios' 
var img = "https://res.cloudinary.com/ashudev/image/upload/v1616913942/ujwfp0mukb69t9b3c4wh.jpg";
function Cakedetails(props) {
  
  let param =useParams()
  //alert(param.cakeid)
  let [cakedata,setCakes]=useState([])

   let getcake="https://apibyashu.herokuapp.com/api/cake/"+param.cakeid
   useEffect(() => {
       axios({
           url:getcake,
           method:"get",
       }).then((response)=>{
           console.log("response from search api" ,response.data)
           setCakes(response.data.data)
       },(error)=>{
           console.log("error from search api",error)
       })
   }, [])        
   
   let addtocard = function(event){
            //console.log(cakedata.cakeid)
    var token = localStorage.token
    let apiurl="https://apibyashu.herokuapp.com/api/addcaketocart"
    axios({
         url:apiurl,
         method:"post",
         data:{
            cakeid:cakedata.cakeid,
            name:cakedata.name,
            image:cakedata.image,
            price:cakedata.price,
            weight:cakedata.weight
            
          },
         headers:{
           authtoken:token
         }
    }).then((response)=>{
       alert('addedd successfully')
       console.log("Response from add to cart api",response.data)
     
    },(error)=>{
       console.log("Error from add to cart api",error)  
    })
  
    }
  return (
   <div className="card" style={{margin:"20px,140px"}}>   
    <div className="card-body text-center" style={{backgroundColor: "lightgray",margin:"30px"}}>
    
	    <div className="row">
         <div className="col-md-6">
            <img src={cakedata.image} style={{height:"400px",width:"390px"}} className="card-img-top" alt="..." />
         </div>

         <div className="col-md-6">
            <h1 className="text-uppercase font-weight-bold pt-5 pb-3" >{cakedata.name}</h1>
            <p > {cakedata.description}</p>
            
            <h3 className="text-uppercase" >Price : $ {cakedata.price}</h3>
            <h3 className="text-uppercase" >Weight : KG {cakedata.weight}</h3>
            <h3 className="text-uppercase" >Flavour : {cakedata.flavour}</h3>
            {
         props.loginstatus ?
           
                    <button onClick={addtocard}  className="form-control btn btn-warning mr-sm-2" style={{width:"130px"}}>Add To Card</button>:
              <div></div>}
               </div>
                
                
         </div>
	      </div>
      </div>
  );
}

export default Cakedetails;
