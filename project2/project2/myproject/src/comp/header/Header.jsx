import React from "react";
import {AppBar,Box,Toolbar,Typography,styled} from '@mui/material';
import Search from "./Search"
import Profile from "./Profile"
import { Link } from "react-router-dom";

const StyledBar=styled(AppBar)`
background-color:white;
height:80px;
color:black;
// position: relative;
// box-shadow: none;
`

const Mwk=styled(Box)`
display:flex;
margin-left:40px;
& > h1{
    display:flex;
    gap:5px;
    margin-right:40px;
    font-size:13px;
    font-weight:bold;
& > span{
    color:red;
    font-size:10px;
    margin-top:-5px;
} > a{
    text-decoration: none;
    color:black;
    display:flex;
    gap:5px;

}
}
`
const Img =styled("img")({
   filter:'drop-shadow(5px 5px 10px #f06292)',
})
// const ImgUrl="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"

const Header=()=>{
    return(
        <StyledBar >
            <Toolbar>
                <Box onClick={()=>window.scrollTo(0,0)}> <Link to='/'>
                    <Img src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png" alt="" height={70} width={120}/>
             </Link>   
             </Box>
                
                <Mwk onClick={()=>window.scrollTo(0,0)}>
                    <Typography component="h1"><Link onClick={window.scrollTo(0,0)} to='/men'>MAN</Link></Typography>
                    <Typography component="h1"><Link to="/women" >WOMEN</Link></Typography>
                    <Typography component="h1"><Link to="/kids" >KIDS</Link></Typography>
                    <Typography component="h1"><Link to="/homeliving">HOME<Box>&</Box><Box>LIVING</Box></Link> </Typography>
                    <Typography component="h1"><Link to="/beauty">BEAUTY</Link></Typography>
                    <Typography component="h1">STUDIO <Box component="span" >NEW</Box> </Typography>
                </Mwk>
                <Search/>
                <Profile/>
               

            </Toolbar>

        </StyledBar>  
       
    )
}
export default Header;