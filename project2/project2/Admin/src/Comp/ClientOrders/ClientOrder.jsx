import React, { useEffect, useState } from "react"
import './Clients.css'
import cross_icon from '../../assets/cross_icon.png'
const ClientOrder=()=> {

  const [allproducts,setAllProduct] = useState([])

  const fetchInfo = async ()=>{
    await fetch('http://localhost:5000/allorder').then((res)=>res.json()).then((data)=>{setAllProduct(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async(id)=>{
    await fetch('http://localhost:5000/removeorder',{
      method:'POST',
      headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className="list-product">
      <h1>All Orders</h1>
      <div className="listproduct-format-main vss">
        <p>Product</p>
        <p>Client Id</p>
        <p>Names</p>
        <p>Numbers</p>
        <p>Product Details</p>
        <p>Address</p>
        <p>Total No. of Items</p>
        <p>Price</p>
        <p>Remove</p>
      
      </div>
      
      <div className="listproduct-allproducts">
        <hr/>
        {allproducts.map((product,index)=>{
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <img className="img" src={product.url} alt=""/>
          <p>{product._id}</p>
            <p>{product.name}</p>
            <p>{product.number}</p>
            <p>{product.title}</p>
            <p>{product.fulladdress}</p>
            <p>{product.items}</p>
            <p>{product.price}</p>
            <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
            </div>
          
          <hr/>
          </>
        })}

      </div>
     

    </div>
  )
}

export default ClientOrder;
