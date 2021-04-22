import React, { useContext } from 'react';
import {useEffect , useState} from "react";
import CartItem from './CartItem';
import axios from 'axios'
import {Link } from "react-router-dom";
import { connect } from "react-redux"
const CartSummary = (props) => {
    var total=0; var count=0;
    let [cartItems,setCakes]=useState([])
    var token = localStorage.token
        let apiurl="https://apibyashu.herokuapp.com/api/cakecart"
        useEffect(() => {
            axios({
                url:apiurl,
                method:"Post",
                data:{},
                headers:{
                  authtoken:token
                }
            }).then((response)=>{
                console.log("response from cart api" ,response.data)
                setCakes(response.data.data)
                { cartItems?.length > 0 ? cartItems.map((each, index)=>{
                   count++;
                   props.dispatch({
                    type:'CART_ITEM',
                    payload : count
                })
                 }) : count=count
             }  
            
            },(error)=>{
                console.log("error from cart api",error)
            })
        }, [])

    return ( 
        <div>
        
            <div className="card card-body shadow p-3 mb-5 bg-white rounded">
            { cartItems?.length > 0 ? cartItems.map((each, index)=>{
                   console.log(each)
                    total=total+each.price
		          return <CartItem product={each} key={index}/>
		        }) : <div className="alert alert-danger"> No result found</div>
		    }
            
            <div style = {{border: "1px solid orange"}}></div>
            <div className="row">
                <div className="col-sm-2 p-2"></div>
                <div className="col-sm-4 p-2 text-center ">
                <h3>Total Cost</h3>
                </div>
                <div className="col-sm-2 p-2">
                
                </div>
                <div className="col-sm-2 p-2 text-center ">
                <h3>$ {total}</h3>
                    </div>
                
            </div>   
            
            </div>
           
              
            <div className=" text-center">      
<div><Link to="/checkout/address"> <button className="btn btn-warning" >Next </button></Link></div>
        </div></div>

     );
}
export default connect()(CartSummary);
//export default CartSummary;//Request obj - {caked, name, image, price,weight}   /addcaketocart  //cakecart