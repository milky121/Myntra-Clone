import React, { useContext, useState } from "react";
import { styled } from "@mui/material";
import { MyContext } from "../../context/DataProvider";
import Items from "../items/Items";




const Div=styled('div')({
    display:"flex",
    gap:'50px',
})

const Div2=styled('div')({
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    gap:'10px',
    height:'100%',
    width:'60%',
    "& > img":{
        height:"100%",
        width:"100%",
    }
})

const Div3=styled('div')({
  marginTop:'-20px',
  '& > p':{
    fontSize:'22px',
    marginTop:'-10px'
  },
  '& > h1':{
    fontSize:'25px',

  }
})
const Div4=styled('div')({
    fontSize:'20px',
})
const Span=styled('span')({
    fontWeight:'bold'
})
const Span2=styled('span')({
    textDecoration:'line-through',
})
const Span3=styled('span')({
    color:"orange",
})
const Div5=styled('div')({
    fontSize:'20px',
    '& >div':{
        display:"flex",
marginTop:'20px',
        '& > span':{
            display:'grid',
            height:'50px',
            width:'50px',
            marginLeft:'10px',
            color:"red",
            border:'1px solid red',
            borderRadius:"50%",
            alignItems: 'center',
            justifyContent: "center"
        }
    },
})
const Div6=styled("div")({
    display:"flex",
    width:"100px",
    height:"50px",
   border:"1px solid red",
   textAlign:"center",
   borderRadius:"100px",
   color:"red",
   fontWeight:"500",
   alignItems: 'center',
   justifyContent: "center",
   fontSize:"15px",
   

})

const Div7=styled('div')({
    display:"flex",
    gap:'20px',

})

const Btn=styled('button')({
    height:"50px",
    width:'200px',
    marginTop:'30px',
    background:"#ec1169",
    border:"none",
    color:'white',
    fontWeight:600,
":hover":{
    color:"black",
    border:"1px solid black",
}
})

const Btn2=styled('button')({
    height:"50px",
    width:'200px',
    marginTop:'30px',
    background:"white",
    color:'black',
    fontWeight:600,
    border:"1px solid black",
    ":hover":{
        background:"#ec1169",
        color:"black",
    }

})
const P=styled('div')({
    marginTop:"10px"
})


const  ProductDis =(props)=>{
    const [wishList, setWishList]=useState(true)
    const {product}=props;
    
    const {addToCart,addToWishlist}=useContext(MyContext);

 
    return(
        <Div >
            <Div2 >
                <img src={product.url} alt=""/>
                <img src={product.url2} alt=""/>
            </Div2>
            <Div3 > 
            <h1>{product.productCompany}</h1>
            <p>{product.title}</p>

                <Div4 ><Span>RS.{product.price}</Span> MRP <Span2>RS.{product.mrp}</Span2> <Span3>({product.discount} OFF)</Span3> </Div4>
            
            <div style={{color:"green"}}>
            inclusive of all taxes
            </div>

{product.category2==="Handbag" || product.category2==="Jewellery" ?

<Div5>
<div>Select Size</div>
<Div6>One Size</Div6>
</Div5>
:
<div>
            {product.category==="Man" || product.category==="Woman"|| product.category2==="Shoes" ?
            <div>
            <Div5><div>Select Size</div></Div5>
            <Div5 >      
         {product.category2==="Man Shirts"||product.category2==="Man Tshirts"||product.category2==="Man Jeans" || product.category2==="Kurta"||product.category2==="Sarees"||product.category2==="Dresses"||product.category2==="Sports" ?    
                <div >
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                </div>
                :
                <div>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>

                </div>
    }
            </Div5>
            </div>
            :
            <Div5>
                 <div>Select Size</div>
           <Div6>One Size</Div6>
            </Div5>
}
</div>
}
               

<Div7>
            <Btn onClick={()=>{addToCart(product.id)}} >ADD TO BAG</Btn>
            {wishList ? 
            <Btn2 onClick={()=>{addToWishlist(product.id);setWishList(false)}}>WISHLISTED</Btn2>
            :
            <Btn2 onClick={()=>{addToWishlist(product.id)}}>WISHLISTED SUCCESS</Btn2>
}
            </Div7>
            <P ><span>Category:</span>{product.category}</P>
            <P ><span>Tage:</span>Modern,Latest</P>

            </Div3>
            
<div style={{display:"none",}}><Items/></div>

        </Div>
    )
    
}

export default ProductDis;