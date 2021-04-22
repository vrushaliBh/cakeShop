import { Link } from "react-router-dom";


function Cake(props){
    return(
        <div class="card" style={{width: "21rem"}}>
           <Link to={"/cake/"+props.cakedata.cakeid}> <img src={props.cakedata.image} style={{"height": "220px","padding":"10px"}} className="card-img-top" alt="..." /></Link>
            <div class="card-body">
                <h5 className="card-title">{props.cakedata.name}</h5>
            </div>
        </div>
)
    
}



    
    export default Cake