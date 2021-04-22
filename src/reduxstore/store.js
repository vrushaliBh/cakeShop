import {createStore} from 'redux'
import Login from '../Login'
import demo from './reducers'
var store=createStore(demo)

// store.dispatch({
//     type:"LOGIN"
// })
// console.log("................",store.getState())

// store.dispatch({
//     type:'Login',
//     payload:{email:'vrushalibhadane1@gmail.com',name:'vrushali'}
// })

//console.log('..............after login',store.getState())
export default store