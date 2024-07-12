
import React, { useContext, useEffect, useState } from "react"
import { MyContext } from "../../context/DataProvider";
import { colors, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Div=styled("div")({
 marginTop:"100px",
})

const Div2=styled("div")({
  display:"flex",
  gap:"50px",
 })
 const H2=styled("h3")({
width:'500px',
 })
 const Img=styled("img")({
  height:"200px",
  width:"200px",
 })
 const Div3=styled("div")({
  display:"flex",
flexDirection:"column",
gap:"90px",
marginLeft:"100px",
marginTop:"-10px",
 })

 const P=styled("p")({
fontSize:"18px",
"& > span":{
  color:"green",
  fontWeight:"500",
},
"& > span2":{
color:"red",
fontWeight:"500",
}
 })

 const Btn=styled("button")({
  marginTop:"50px",
  width: "300px",
  height: "58px",
  outline: "none",
  border: "none",
  background: "#ff5a5a",
  color:"#fff",
  fontSize: "16px",
  fontWeight:"600",
  cursor: "pointer",
  ":hover":{
      background:"black",
      color:"red",
  }

})
const MyOrders=()=> {

  const {myorders,allproduct}=useContext(MyContext)
  return (
  <Div>
    {allproduct.map((e)=>{
            if(myorders[e.id]>0){
             
   return <div>
    <h1>Order Details</h1>
<p>Order ID - OD452415232115</p>
<Div2>
  <div> <H2>{e.title}</H2> 
  <h4></h4>
  </div>
 <Img src={e.url} alt=""/>
 <Div3><P>Order <span>Confirmed</span></P>
 <P>Delivered, <span2>Pending</span2></P>
 </Div3>
</Div2>
<Link to="/ordercancel" ><Btn>Cancel Order</Btn></Link>
</div>
}

})}
  </Div>
     

  
  )
}

export default MyOrders;
