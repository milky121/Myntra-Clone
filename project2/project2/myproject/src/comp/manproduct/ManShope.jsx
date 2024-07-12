import { Box } from "@mui/material"
import ManBanner from "./ManBanner"
import Manproduct from "./ManProduct"
import { Link } from "react-router-dom"



const Manshope=()=>{
    return(
        <Box>
           <Link to="/man"><ManBanner/></Link> 
          <Manproduct/> 

        </Box>
    )
}
export default Manshope