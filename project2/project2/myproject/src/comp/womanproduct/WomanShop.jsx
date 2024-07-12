import { Box } from "@mui/material"
import WomenBanner from "./WomanBanner"
import Womanproduct from "./WomanProduct";
import { Link } from "react-router-dom";





const WomanShop=()=>{
    return(
        <Box>
<Link to="/woman"><WomenBanner/></Link>
<Womanproduct/>
        </Box>
    )
}
export default WomanShop;