
import styled from '@emotion/styled';
import {Box, Dialog, Typography} from '@mui/material';
import React, { useState} from 'react';
import LogOut from '../header/Logout';


const Boxdiv=styled(Box)`
display:flex;
flex-direction: column;
width:80%;
height:700px;
margin-left:50px;
gap:20px;
`
const Ptag=styled(Typography)`
font-size:20px;
font-weight:bold;
& > span{
    font-size:15px;
    font-weight:10;
}
`
const Boxdiv2=styled(Box)`
display:flex;
flex-direction: column;
gap:20px;
width:100%;
& > input{
    width:80%;
    height:40px;
    padding-left:60px;
    }
}
`
const Boxdiv3=styled(Box)`
display:flex;
width:100%;
& > input{
    width:80%;
    height:40px;
    padding-left:60px;
    }
}
`
const Boxx=styled(Box)`
position: absolute;
display:flex;
gap:10px;
margin:10px;
font-size:15px;
// z-index: +1;
`
const Input=styled('input')({
    width:"94%",
    height:"40px",
    paddingLeft:"10px"
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
const Btn=styled("button")({
    border:"none",
    height:'50px',
    color:"white",
    background:"#ff4081",
    fontSize:15,
    fontWeight:"700",
    cursor:'pointer',
    ":hover":{
        background:"black",
        color:"red"
    }
})
const Error= styled(Typography)`
font-size:10px;
color:red;
line-height:0;
margin-top:-10px;
font-weight:600;
`
 



const signupData={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    mobilenumber:"",
    password:""
}

// const loginData={
//     mobilenumber:"",
//     password:""
// }



// const LoginDialog=({ open,setOpen})
const LoginDialog=(x)=>{

const handleclose=()=>{
    x.setOpen(false)
    setAccount("login")
    setError(false)
}

const [account, setAccount] =useState("login")
const [signup, setSignup]=useState(signupData);
// const [login, setlogin]=useState(loginData)
const [error, setError]=useState(false)


 const changeHandler=(e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
    console.log(signup)
 }
 const signupUser=async()=>{
    console.log("SignUp Function Executed",signup)
    // alert("SignUp Function Executed")
    let responseData;
    await fetch("http://localhost:5000/signup",{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(signup),
    }).then((response)=> response.json()).then((data)=>responseData=data)


    if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
        handleclose();
    }
    else{
        alert(responseData.errors)
    }
   
 }


//  const valueChange=(e)=>{
//     setlogin({...login,[e.target.name]:e.target.value})   
//  }

 const loginUser=async()=>{
    console.log("Login Function Executed",signup);
    // alert("Login Function Executed")
    let responseData;
    await fetch("http://localhost:5000/login",{
        method:'POST',
        headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(signup),
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/")
        handleclose()
    }
    else{
        alert(responseData.errors)
    }
    
 }


    return(
         <Dialog  open={x.open} onClose={handleclose} >
        {localStorage.getItem('auth-token') ?
        
        <LogOut/>
        :
<Box>
   {account==="login"?
     <Box>
<Box> 
      <img src='https://i.ytimg.com/vi/cNJgV8x5XpQ/maxresdefault.jpg ' alt='' width={450} height={200}/>
</Box>


<Boxdiv>
   <Ptag  > Login <span>or</span> Signup</Ptag>

<Boxdiv2>
    <Boxdiv3>
    <Boxx>+91 <span>|</span></Boxx>
    <input type='text' placeholder='Mobile Number' name='mobilenumber' onChange={changeHandler}/>
</Boxdiv3>
{error &&
<Error>Please enter valid mobile number(10 digit)</Error>}
    <Box><Input type='password' placeholder='Enter Password' name='password' onChange={changeHandler}/></Box>
    
  <P> By continuing, I agree to the <span>Terms of Use</span> & <span> Privacy Policy </span></P>
</Boxdiv2>

<Btn className='btn' onClick={()=>loginUser()}>CONTINUE</Btn>
<P>You are new user? <span onClick={()=>setAccount("Signup")}>Signup Now</span></P>

<P>Have trouble logging in? <span>Get help</span></P>

</Boxdiv>

</Box>

:
<Box>
    
<Boxdiv>
   <Ptag  > Login <span>or</span> Signup</Ptag>


<Boxdiv2>

<Box><Input type='text' placeholder='Enter First Name' name='firstname' onChange={changeHandler} /></Box>
<Box><Input type='text' placeholder='Enter Last Name' name='lastname' onChange={changeHandler} /></Box>
<Box><Input type='text' placeholder='Enter Username' name='username' onChange={changeHandler} /></Box>
<Box><Input type='text' placeholder=' Enter Email' name='email' onChange={changeHandler} /></Box>

<Boxdiv3>
    <Boxx>+91 <span>|</span></Boxx>
    <input type='text' placeholder='Mobile Number' name='mobilenumber' onChange={changeHandler} />
</Boxdiv3>

    <Box><Input type='password' placeholder='Enter Password' name='password' onChange={changeHandler} /></Box>
    
  <P> By continuing, I agree to the <span>Terms of Use</span> & <span> Privacy Policy </span></P>
</Boxdiv2>

<Btn className='btn' onClick={()=>signupUser()}>CONTINUE</Btn>

<P>You have already have an account? <span onClick={()=>setAccount("login")}>Login Account</span></P>
<P>Have trouble logging in? <span>Get help</span></P>
</Boxdiv>
<Box> 
      <img src='https://i.ytimg.com/vi/cNJgV8x5XpQ/maxresdefault.jpg ' alt='' width={450} height={200}/>
</Box>

</Box>
}
</Box>
 
}
        </Dialog>

        
    )
}
export default LoginDialog;