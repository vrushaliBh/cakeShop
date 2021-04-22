import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from './icons'
import axios from 'axios'  
import { connect } from "react-redux"
function CakeItem(product){
    const increase = payload => {
       // dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
       // dispatch({type: 'DECREASE', payload})
    }
    let removeProduct = function(event){
        //console.log(cakedata.cakeid)
        var token = localStorage.token
        let apiurl="https://apibyashu.herokuapp.com/api/removecakefromcart"
        axios({
            url:apiurl,
            method:"post",
            data:{
                cakeid:product.product.cakeid,
                email:product.product.name
                
                
            },
            headers:{
            authtoken:token
            }
        }).then((response)=>{
        alert('removed successfully')
        console.log("Response from add to cart api",response.data)
        window.location.reload(); 
        },(error)=>{
        console.log("Error from add to cart api",error)  
        })

}
    
    console.log(product)
    return(
          <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.product.name}
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={product.product.image} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.product.name}</h5>
               
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <h5 className="mb-0">Qty: {product.product.quantity}</h5>
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <h5 className="mb-0">Price: {product.product.price}</h5>
            </div>
            <div className="col-sm-2 p-2 text-right">
                 {/* <button 
                onClick={() => increase(product)}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                     <PlusCircleIcon width={"20px"}/>
                 </button> */}

                 {
                     product.product.quantity > 1 &&
                     <button
                    
                    className="btn btn-danger btn-sm mb-1">
                         onClick={() => decrease(product)}
                        <MinusCircleIcon width={"20px"}/>
                    </button>
                 }

                {
                     product.product.quantity === 1 &&
                     <button
                     onClick={() => removeProduct(product)}
                    className="btn btn-danger btn-sm mb-1">
                        <TrashIcon width={"20px"}/>
                    </button>
                 }
                 
            </div>
        </div>
)
    
}



    
export default connect()(CakeItem)