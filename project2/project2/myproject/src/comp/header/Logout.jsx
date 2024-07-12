import { Typography, Box, styled,  } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Div=styled(Box)`
background:black;
height:400px;
width:400px;
`

const P=styled(Typography)`
color:red;
text-align:center;
`
const P2=styled(Box)`
color:red;
text-align:center;
margin-top:30px;
height:30px;
width:"10px";
background:white;
`
const Div2=styled(Box)`
display:flex;
width:100px;
height:30px;
align-items: center;
  justify-content: center;
//   border:1px solid red;
  color:black;
  margin-top:50px;
  background:red;
border-radius:20px;
:hover{
    background:black;
    color:red;
}
`


const Div3=styled(Box)`
display:flex;
align-items: center;
  justify-content: center;

`


const LogOut = () => {


    
    return (
        <Div>
        <Box>
            <P>You Account </P>
            <hr/> 
             <Link style={{textDecoration:"none"}} to="/"><P2>Home</P2></Link>
           <Link style={{textDecoration:"none"}} to="/myorderlist" ><P2>Orders</P2></Link> 
            <Link style={{textDecoration:"none"}}to="/wishlist"><P2>Wishlist</P2></Link>
           
          

        </Box>
        <Div3>
                <Div2 onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>
                    <PowerSettingsNew fontSize='small' color='primary'/> 
                    <Typography onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</Typography>
                </Div2>
</Div3>
               
            </Div>
    )    
}

export default LogOut;