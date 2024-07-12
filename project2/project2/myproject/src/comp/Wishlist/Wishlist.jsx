import AllProduct from '../../Aproducts/Allproduct/AllProduct';
import { useContext } from 'react';
import { MyContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import { Box, Typography, styled } from '@mui/material';


const Div2=styled('div')({
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",
    gap:"20px",
    marginTop:"110px",
})
const Div3=styled('div')({
    marginTop:"110px",
})

const Div=styled(Box)`
display:flex;
flex-direction:column;

`
const Img=styled('img')({
   height:'300px',
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

const Div4=styled('div')({
    display:"flex",
    gap:'10px',
})
const Btn=styled("button")({
    height:"30px",
    width:'200px',
    marginTop:'30px',
    background:"#ec1169",
    border:"none",
    color:'white',
    fontWeight:600,
":hover":{
    background:"black",
    color:"#ec1169",
    border:"1px solid black",
}
})
const Btn2=styled("button")({
    height:"30px",
    width:'30px',
    marginTop:'30px',
    background:"#ec1169",
    border:"none",
    color:'white',
    fontWeight:600,
":hover":{
    background:"black",
    color:"#ec1169",
    border:"1px solid black",
}
})
const P3=styled('p')({
    textAlign:"center",
    marginBottom:"1px",
    fontSize:"12px",
    fontWeight:"500",
})

const  Bagitem =()=>{
const {allproduct,wishList,addToWishlist,removeFromWishlist,addToCart,getTotalCartAmount,cartItems,removeFromCart}=useContext(MyContext)


  
    
    return(
        <Div3>
            <h1>My Wishlist</h1>
            <Div2>
           
          {allproduct.map((e)=>{
            if(wishList[e.id]>0){
             
                  return   <div>
                    
               <Div><P3>ADD {wishList[e.id]} TIME</P3><Link to={`/man/${e.id}`}><Img onClick={window.scrollTo(0,0)} src={e.url} alt="" /></Link>
         <P2>{e.title} </P2>
         <Box>

           <Span>Rs. {e.price} </Span> <Span2> Rs. {e.mrp} </Span2> <Span3>({e.discount} off)</Span3>   
          
         </Box>
<Div4>
         <Btn onClick={()=>{addToCart(e.id);removeFromWishlist(e.id)}}>MOVE TO BAG</Btn>
         <Btn2 onClick={()=>{removeFromWishlist(e.id)}} >X</Btn2>
</Div4>
         </Div>
                </div>
            }
            
          })}

</Div2>
        </Div3>
    )
    
}

export default Bagitem;