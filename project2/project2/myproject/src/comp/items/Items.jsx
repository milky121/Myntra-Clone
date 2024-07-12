import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Div=styled(Box)`
display:flex;
flex-direction:column;

`
const Img=styled('img')({
   height:'80%',
   width:'90%'
})
const P=styled(Typography)`
font-weight:bold;
font-size:15px;
`
const P2=styled(Typography)`
font-size:13px;
`
const Span=styled('span')({
   fontWeight:"bold",
fontSize:"13px",

})
const Span2=styled('span')({
   fontSize:"12px",
   textDecoration: 'line-through',
})
const Span3=styled('span')({
   fontSize:"12px",
   color:"red",
})

const Items=(props)=>{
return(      
         <Div><Link to={`/man/${props.id}`}><Img onClick={window.scrollTo(0,0)} src={props.url} alt="" /></Link>
         <P>{props.productCompany}</P>
         <P2>{props.title} </P2>
         <Box>

           <Span>Rs. {props.price} </Span> <Span2> Rs. {props.mrp} </Span2> <Span3>({props.discount} off)</Span3>   
          
         </Box>
         </Div>
)

}
export default Items;