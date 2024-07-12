import { Box, Typography, styled } from "@mui/material"
import { useContext, useState } from "react"
import { MyContext } from "../../context/DataProvider"


const Div=styled('div')({
    display:"flex",
    flexDirection:"column",
    marginTop:"100px",
    gap:"20px",
})


const Div1=styled("div")({
    width:'50%',
 gap:"20px",
 })



    const Div2=styled("div")({
        marginTop:"10px",
        width:"400px",
    })
 
    const Input=styled('input')({
        width:"400px",
        height:"40px",
        paddingLeft:"10px"
    })
    const Boxdiv=styled(Box)`
    display:flex;
    gap:50px;
    width:100%;
    }`

    const Div3=styled("div")({
        marginTop:"-10px",
        width:"400px",
        display:"flex",
        flexDirection:"column",
        gap:"10px",
    })
    const Btn=styled("button")({
        marginTop:"50px",
        width: "200px",
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
const Img=styled("img")({
height:"50%",
})

const Cancelorder=()=>{

    const myData={
        name:"",
        number:"",
        code:"",
    }
    const [data, setData]=useState(myData);
    
    const changeHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    }

    const CancelProduct = async () =>{
        console.log("Login Function Executed",data);
        // alert(" Function Executed")
        let responseData;
        await fetch("http://localhost:5000/delete",{
            method:'DELETE',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(data),
        }).then((response)=> response.json()).then((data)=>responseData=data)
       
    
        if(responseData.success){
             alert("Order Cancel ")
        }
        else{
            alert(responseData.errors)
        }
       
    }
    const {allproduct,myorders,removeFromOrders}=useContext(MyContext)
    return(
<Div>
{allproduct.map((e)=>{
            if(myorders[e.id]>0){
              
     return <Div1>
      <Div2>
            <Boxdiv>
                <div><Img src={e.url} alt=""/>
                <h5>{e.title}</h5>
                </div>
            <Div3>  
                 <h3>CONTACT DETAILS</h3>
<Box><Input value={data.name} type='text' placeholder='Name' name='name'  onChange={changeHandler} /></Box>
<Box><Input value={data.number} type='text' placeholder='Mobile Number' name='number'  onChange={changeHandler} /></Box> 
<h3>Enter your unique code that you entered when placing your order </h3>
<Box><Input value={data.code} type='text' placeholder='Please Enter your order unique code ' name='code'  onChange={changeHandler} /></Box>  
    
  <Btn  onClick={()=>{CancelProduct();removeFromOrders(e.id)}} >Cancel Order</Btn></Div3>

</Boxdiv>
        </Div2>
                </Div1>

            }
            
            })}

</Div>
    )
}
export default Cancelorder;