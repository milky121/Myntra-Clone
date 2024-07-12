import { styled } from "@mui/material";


const Div=styled("div")({
    margin:'100px 20px',
    fontSize:"15px",

   '& > span': {
    fontWeight:"bold",
   }
})

const ProductDisHead=(props)=>{
    const {product}=props;
    return(
        <Div>
          HOME / SHOP /  {product.category} / <span>{product.title}</span>
        </Div>
    )

}
export default ProductDisHead;