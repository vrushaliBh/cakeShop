export const sumItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemCount, total }
}
var demo = function(state={
        user:null
},action){

    switch(action.type){
        case "LOGIN":{
            console.log("login case")
            state={...state}
            state["islogin"]=true
            state["user"]= action.payload
            return state
        }
        case "LOGOUT":{
            console.log("Logout case")
            localStorage.clear()
            state={...state}
            delete  state["islogin"]
            delete state["user"]
            delete state["cart_count"]
            return state
        }
        case "INITIAL_USER":{
            console.log("INITIAL_USER case")
            state={...state}
            state["islogin"]=true
            state["user"]= action.payload
            return state
        }
        case "CART_ITEM":{
            console.log("login case")
            state={...state}
            state["islogin"]=true
            state["cart_count"]= action.payload
            return state
        }
        
        // case "ADD_ITEM":
        // if (!state.cartItems.find(item => item.cake === action.payload.cake)) {
        //     state.cartItems.push({
        //         ...action.payload,
        //         quantity: 1
        //     })
        // } 

        // return {
        //     ...state,
        //     ...sumItems(state.cartItems),
        //     cartItems: [...state.cartItems]
        // }
        // case "REMOVE_ITEM":
        //     return {
        //         ...state,
        //         //...sumItems(state.cartItems.filter(item => item.id !== action.payload.id)),
        //         cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
        //     }
        // case "INCREASE":
        //     state.cartItems[state.cartItems.findIndex(item => item.cakeid === action.payload.cakeid)].quantity++
        //     return {
        //         ...state,
        //        // ...sumItems(state.cartItems),
        //         cartItems: [...state.cartItems]
        //     }
        // case "DECREASE":
        //     state.cartItems[state.cartItems.findIndex(item => item.cakeid === action.payload.cakeid)].quantity--
        //     return {
        //         ...state,
        //        // ...sumItems(state.cartItems),
        //         cartItems: [...state.cartItems]
        //     }
        
        default : return state

    }

}

export default demo