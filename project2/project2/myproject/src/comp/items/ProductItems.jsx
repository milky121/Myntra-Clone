import styled from "@emotion/styled";
import Items from "./Items"

import { Box,Typography } from "@mui/material";
// import AllProduct from "../../Aproducts/Allproduct/AllProduct";
import ProductItemHeader from "./ProductItemHeader";
import { useContext } from "react";
import { MyContext } from "../../context/DataProvider";

const Div=styled(Box)`
margin-top:100px;
display:flex;
flex-direction:column;
gap:10px;


`
const Div2=styled(Box)`
margin:5px 20px;
font-size:15px;
&> span{
  font-weight:bold;
}
`

const T=styled("table")({
  border:"1px solid black",
  borderCollapse:"collapse",
  height:'100%',
  position:"sticky",
  top:0
})
const Tr=styled("tr")({
  border:"1px solid black",
  borderCollapse:"collapse",
  height:'10px'
})

const Td=styled("td")({
  display:"flex",
flexDirection:"column",
fontSize:"12px",
margin:"10px",
width:'220px',
'& > p':{
  fontSize:"13px",
  fontWeight:"bold",
  margin:"10px 5px"
}

})
const Div3 =styled(Box)`
display:flex;

`
const ProductDiv=styled(Box)`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin-left:70px;
place-items: center;
gap:30px;
`

const categoryy=[{
  category:"man",
  category2:"Man Shirts",
},
{
  category:"Woman",
  category2:"woman",
},
{
  category:"Kids",
  category2:"kids",
}
]



const ProductItems=(props)=>{
 const {allproduct}=useContext(MyContext)
  // const product =  categoryy.find((e)=>e.category === props.category||e.category2===props.category2);

    return(      

    <Div>
{
  categoryy.map((e,i)=>{if(props.category === e.category){
    return  <Div2>Home/Clothing/<span>{e.category}</span></Div2>
  }
    
    else if(props.category2===e.category2){
      return <Div2>Home/Clothing/<span>{e.category2}</span></Div2>
    
  }})
}

    <Div2>
         <span>FILTERS</span>
         </Div2>   
         <Div3> 
    <T>
      <Tr>
            <Td>
              <p>CATEGORIES</p> 

                    <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>Man</span>
                          </label>
    
                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>Woman</span>
                          </label> 
                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>Kids</span>
                          </label>                      
              </Td>
           
            </Tr>
      <Tr><Td>
              <p>PRICE</p> 

                    <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>Rs. 199 to Rs. 1068</span>
                          </label>
    
                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>Rs. 1068 to Rs. 1937</span>
                          </label>

                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>Rs. 1937 to Rs. 2806</span>
                          </label>
                          
                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>Rs. 2806 to Rs. 3675</span>
                          </label>

                          </Td></Tr>

      <tr><Td>
              <p>DISCOUNT RANGE</p> 

                    <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>10% and above</span>
                          </label>
    
                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>20% and above</span>
                          </label>

                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>30% and above</span>
                          </label>
                          
                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>40% and above</span>
                          </label>

                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>50% and above</span>
                          </label>

                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>60% and above</span>
                          </label>
                          
                          <label style={{display:"flex"}}>
                         <input type="checkbox"/>
                         <span>70% and above</span>
                          </label>
                          
                          </Td></tr>

    </T>

    <ProductDiv>
     {
      
      allproduct.map((e,i)=>{
        if (props.category===e.category){
          return <Items key={i} id={e.id} url={e.url} productCompany={e.productCompany} title={e.title}  mrp={e.mrp}  price={e.price} discount={e.discount} />
        
        }
        else if(props.category2===e.category2){
          return <Items key={i} id={e.id} url={e.url} productCompany={e.productCompany} title={e.title}  mrp={e.mrp}  price={e.price} discount={e.discount} />
        }
        else if(props.web===e.web){
          return <Items key={i} id={e.id} url={e.url} productCompany={e.productCompany} title={e.title}  mrp={e.mrp}  price={e.price} discount={e.discount} /> ;
        } 
          else{
          return null;
        }
      })
     }
    
    </ProductDiv>

    </Div3>

    </Div>

   
    
    )
    
    }
export default ProductItems;