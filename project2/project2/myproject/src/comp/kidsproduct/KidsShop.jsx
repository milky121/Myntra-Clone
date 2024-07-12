import { Box } from "@mui/material";
import KidsBanner from "./KidsBanner"
import KidsProduct from "./KidsProduct";
import { Link } from "react-router-dom";




const KidsShop=()=>{
    return(
        <Box>
           <Link to="/kid"><KidsBanner/></Link> 
            <KidsProduct/>
        </Box>
    )
}
export default KidsShop;