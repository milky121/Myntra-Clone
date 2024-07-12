import React, { useEffect, useState } from "react"
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const List=()=> {

  const [allproducts,setAllProduct] = useState([])

  const fetchInfo = async ()=>{
    await fetch('http://localhost:5000/allproduct').then((res)=>res.json()).then((data)=>{setAllProduct(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id)=>{
    await fetch('http://localhost:5000/removeproduct',{
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
      <h1>All Products List</h1>
      <div className="listproduct-format-main vss">
        <p>Products</p>
        <p>Title</p>
        <p>Old Prize</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      
      <div className="listproduct-allproducts">
        <hr/>
        {allproducts.map((product,index)=>{
          return <>
          <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.url} alt="" className="listproduct-product-icon"/>
            <p>{product.title}</p>
            <p>RS.{product.mrp}</p>
            <p>RS.{product.price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} src={cross_icon} alt="" className="listproduct-remove-icon" />
            </div>
          
          <hr/>
          </>
        })}

      </div>
     

    </div>
  )
}

export default List
