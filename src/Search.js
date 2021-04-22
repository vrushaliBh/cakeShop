import axios from 'axios'
import Cake from './Cake';
import {useEffect , useState} from "react";
import { useLocation } from 'react-router-dom';
import * as QueryString from "query-string"
import Carousel from "./Carousel";

function Search(props )
{  //console.log(props) 
    var location=useLocation()
    console.log(location)
       let [cakesearch,setCakes]=useState([])
       const params = QueryString.parse(props.location.search);
       console.log(params.q);
       let searchparam=params.q
        let apisearchurl="https://apibyashu.herokuapp.com/api/searchcakes?q="+searchparam
        useEffect(() => {
            axios({
                url:apisearchurl,
                method:"get",
            }).then((response)=>{
                console.log("response from search api" ,response.data)
                setCakes(response.data.data)
            },(error)=>{
                console.log("error from search api",error)
            })
        }, [])
            
    return (
        
            <div> <Carousel> </Carousel>
        <div className="searchcakes" style={{marginTop:"20px",paddingLeft:"30px"}}>
         <h2>Search Result</h2>
          <div className="row">
            { cakesearch?.length > 0 ? cakesearch.map((each, index)=>{
		          return <Cake cakedata={each} key={index}/>
		        }) : <div className="alert alert-danger"> No result found</div>
		    }
          </div>
        </div></div>
    )
}
export default Search