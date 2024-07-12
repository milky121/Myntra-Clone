import { Box, Typography, styled } from "@mui/material";
import { useContext, useState } from "react";
import { MyContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";


const Div=styled('div')({
    marginTop:"100px",
    display:"flex",
    gap:"200px",
})

const Div2=styled("div")({
   display:"flex",
   gap:"50px",
   marginBottom:"100px",
})

const Div3=styled("div")({
    width:'50%',
 gap:"20px",
 })

const Div4=styled("div")({
display:"flex",
gap:"100px",
})

const Div5=styled("div")({
width:"300px",
    })

    const Img=styled("img")({
        height:"100px",
    })
    const P=styled(Typography)`
    font-size:13px;
    margin-top:10px;
    & > span{
        color:#ff4081;
         font-weight:bold; 
         :hover{
        color:red;
        background:black;
    }
    }
    `
    const Input=styled('input')({
        width:"80%",
        height:"40px",
        paddingLeft:"10px"
    })
    const Boxdiv2=styled(Box)`
    display:flex;
    flex-direction: column;
    gap:10px;
    width:100%;
    }`
    const Btn=styled("button")({
        marginTop:"0px",
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


    const x=[
        {
            items:"1",
        },
        {
            items:"2",
        },
        {
            items:"3",
        },
        {
            items:"4",
        },  
    ]

const MyorderStatus=()=>{
  

    const myData={
        url:"",
        title:"",
        price:"",
        items:"",
        name:"",
        number:"",
        pincode:"",
        fulladdress:"",
        code:"",
    }

    const [data, setData]=useState(myData);

    
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    }
    const BuyProduct = async () =>{
        console.log("Login Function Executed",data);
        // alert(" Function Executed")
        let responseData;
        await fetch("http://localhost:5000/addorder",{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data),
        }).then((response)=> response.json()).then((data)=>responseData=data)
       
    
        if(responseData.success){
             alert("Order Success")
        }
        else{
            alert(responseData.errors)
        }
       
    
    }
    
    const {allproduct,getTotalCartAmount,cartItems,removeFromCart,getTotalCartItems,addToOrders}=useContext(MyContext)
    return(
        <Div>
      <div>
        {allproduct.map((e)=>{
            if(cartItems[e.id]>0){
             
                  return   <Div2>
                <div >
                    <Img src={e.url} alt=""/>
                  <select style={{width:"100px",}} name='url'   onChange={changeHandler}>
                   <option>--Select--</option>
                   <option>{e.url}</option>
                 <option>{e.url2}</option>            
            </select> 
                    <p>{e.title}</p>
                    <select style={{width:"100px",}} name='title'   onChange={changeHandler}>
                   <option>--Select--</option>
                   <option>{e.title}</option>            
            </select> 
                <p>Quantity</p>
                   <select style={{width:"100px",}} name='items'   onChange={changeHandler}>
                    <option>--Select--</option>
                    {x.map((e)=>{
                         return <option>{e.items}</option>  
                    })}    
            </select> 

                   <p>Rs.</p>
                       <select style={{width:"100px",}} name='price'   onChange={changeHandler}>
                   <option>--Select--</option>
                   {x.map((s)=>{
                    if(s.items===data.items){
                        return <option>{data.items*e.price}</option>  }
                    })}
               
            </select> 
                   <div>
                    <h5>If you do not want to purchase this item please go the bag and remove the item</h5>
                </div>
                </div>
                

                <Div3>
    
            <Boxdiv2>
                
           
            <h3>CONTACT DETAILS</h3>
<Box><Input value={data.name} type='text' placeholder='Name' name='name'  onChange={changeHandler} /></Box>
<Box><Input value={data.number} type='text' placeholder='Mobile Number' name='number'  onChange={changeHandler} /></Box> 
<h3>ADDRESS</h3>
<Box><Input value={data.pincode} type='text' placeholder='Pin Code' name='pincode'  onChange={changeHandler} /></Box> 
<Box><Input value={data.fulladdress} type='text' placeholder='Address (HouseNo,Locality/Town, City/District, State)' name='fulladdress'  onChange={changeHandler}/></Box> 
<h5>Enter any unique code And place your order</h5>
<Box><Input style={{marginTop:"-15px",}} value={data.code} type='text' placeholder='Please Enter Any Unique Code/text' name='code'  onChange={changeHandler} /></Box>
  <P>  <input type='radio'  name='' /> 
     <span>Cash on Delivery</span> 
  </P>
 <Link to="/myorderlist"><Btn onClick={()=>{BuyProduct();addToOrders(e.id);removeFromCart(e.id)}} >Buy Now</Btn></Link> 
</Boxdiv2>

                </Div3>
                
      <Div5 >
              <h1>Totals {data.items} </h1>
              <div>
                <Div4>
                  <p>Subtatal</p>
                  <p>RS{data.price}</p>
                </Div4>
              <hr/>
                <Div4 >
                  <p>Shopping</p>
                  <p>Free</p>
                </Div4>
                <hr/>
                <Div4>
                  <h3>Total</h3>
                  <h3>RS{data.price}</h3>
                </Div4>
              </div>
            </Div5>
                </Div2>
                
                }})
}
      </div>
      
        </Div>
    )
}
export default MyorderStatus;