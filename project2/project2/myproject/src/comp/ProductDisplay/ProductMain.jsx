import { useContext } from "react";
import ProductDis from "./ProductDis";
import ProductDisHead from "./ProductDisHead";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/DataProvider";

// import AllProduct from "../../Aproducts/Allproduct/AllProduct";


const  ProductMain =()=>{
    const {allproduct}=useContext(MyContext);
    const {id}=useParams();  ///<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    const product = allproduct.find((e)=>e.id === Number(id));
    
    return(
        <div>
        <ProductDisHead product={product}/>
        <ProductDis product={product}/>
     


        </div>
    )
    
}

export default ProductMain;