

import { createContext, useEffect, useState } from 'react';

export const MyContext = createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for (let index=0; index < 300;index++){
      cart[index]=0
    }
    return cart;
  }
  
const getDefaultWishlist=()=>{
  let cart={};
  for (let index=0; index < 300;index++){
    cart[index]=0
  }
  return cart;
}

const getMyOrders=()=>{
  let cart={};
  for (let index=0; index < 300;index++){
    cart[index]=0
  }
  return cart;
}

const ContextProvider = ({children}) => {

    const [allproduct,setAllproduct] = useState([]);
    const [cartItems, setCartItem] =useState(getDefaultCart());
    const [wishList, setWishList]= useState(getDefaultWishlist())
    const [myorders, setMyorders]= useState(getMyOrders())

    

    useEffect(()=>{
        fetch('http://localhost:5000/allproduct')
        .then((response)=>response.json())
        .then((data)=>setAllproduct(data))
    
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:5000/getcart',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json',
            },
            body:"",
          }).then((response)=>response.json()).then((data)=>setCartItem(data))

          fetch('http://localhost:5000/getorder',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json',
            },
            body:"",
          }).then((response)=>response.json()).then((data)=>setMyorders(data))
        
        }
      
      },[])
    
      const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:5000/addtocart',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
          }).then((response)=>response.json()).then((data)=>console.log(data))
        }
      }
       
      const removeFromCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:5000/removefromcart',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
          }).then((response)=>response.json()).then((data)=>console.log(data))
        }
      }

       
      const addToWishlist = (itemId)=>{
        setWishList((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // if(localStorage.getItem('auth-token')){
        //   fetch('http://localhost:5000/addtocart',{
        //     method:'POST',
        //     headers:{
        //       Accept:'application/form-data',
        //       'auth-token':`${localStorage.getItem('auth-token')}`,
        //       'Content-Type':'application/json',
        //     },
        //     body:JSON.stringify({"itemId":itemId}),
        //   }).then((response)=>response.json()).then((data)=>console.log(data))
        // }
      }

      const removeFromWishlist = (itemId)=>{
        setWishList((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        // if(localStorage.getItem('auth-token')){
        //   fetch('http://localhost:5000/removefromcart',{
        //     method:'POST',
        //     headers:{
        //       Accept:'application/form-data',
        //       'auth-token':`${localStorage.getItem('auth-token')}`,
        //       'Content-Type':'application/json',
        //     },
        //     body:JSON.stringify({"itemId":itemId}),
        //   }).then((response)=>response.json()).then((data)=>console.log(data))
        // }
      }

      
      const addToOrders = (itemId)=>{
        setMyorders((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:5000/addmyorder',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
          }).then((response)=>response.json()).then((data)=>console.log(data))
        }
      }

      const removeFromOrders = (itemId)=>{
        setMyorders((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
          fetch('http://localhost:5000/removemyorder',{
            method:'POST',
            headers:{
              Accept:'application/form-data',
              'auth-token':`${localStorage.getItem('auth-token')}`,
              'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
          }).then((response)=>response.json()).then((data)=>console.log(data))
        }
      }
      const getTotalCartAmount =()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
          if(cartItems[item]>0)
          {
            let itemInfo=allproduct.find((product)=>product.id===Number(item))
            totalAmount +=itemInfo.price*cartItems[item];
    
          }
              }
              return totalAmount;
    
      }
    
      const getTotalCartItems= () =>{
        let totalItem=0;
        for(const item in cartItems)
        {
          if(cartItems[item]>0)
          {
            totalItem += cartItems[item];
          }
        }
        return totalItem;
    
      }

      const value={getTotalCartItems,getTotalCartAmount,cartItems,wishList,myorders,addToCart,removeFromCart,allproduct,addToWishlist,removeFromWishlist,addToOrders,removeFromOrders}
    
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider;