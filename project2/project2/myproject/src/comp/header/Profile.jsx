


import {Box, Typography} from "@mui/material"
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import styled from "@emotion/styled";
import LoginDialog from "../login/LoginDialog";
import { useContext, useState } from "react";
import { MyContext } from "../../context/DataProvider";
import { Link } from "react-router-dom";

const Profilediv=styled(Box)`
display:flex;

margin:0 20px;
`
const Icondiv = styled(Box)`
padding-left:30px;
margin-top:10px;
align-items:center;
text-align:center;
& > p{
    font-size:12px;
    font-weight:bold;
    margin-top:-5px;
}
`
const P=styled('div')({
    display:'flex',
    height:"20px",
    width:"20px",
    color:"white",
    background:"red",
    borderRadius:"50%",
    marginTop:"-50px",
    marginLeft:"20px",
    fontWeight:"700",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    

})




const Profile=()=>{
    const {getTotalCartItems}=useContext(MyContext)

    const [open, setOpen]= useState(false);

    

    const openDialog=()=>{
        setOpen(true);
    }

    return(
        <Profilediv>
            <Icondiv onClick={()=>openDialog()}>
                <Person2OutlinedIcon fontSize="medium"/>
               <Typography >Profile</Typography>
    
            </Icondiv>

           <Link style={{textDecoration:"none",color:"black"}} to='/wishlist'> <Icondiv>
                <FavoriteBorderIcon fontSize="medium"/>
                <Typography>Wishlist</Typography>
                
            </Icondiv></Link>

          <Link style={{textDecoration:"none",color:"black"}} to="/bag">  <Icondiv >
                <ShoppingBagOutlinedIcon fontSize="medium"/>
               <Typography>Bag</Typography><P>{getTotalCartItems()}</P>
            </Icondiv></Link> 
            <LoginDialog open={open} setOpen={setOpen}/>

        </Profilediv>
    )
}
export default Profile