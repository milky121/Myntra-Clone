import { Box } from "@mui/material"
import HomeLivingBenner from "./HomeLivingBan";
import HomeLivingProduct from "./HomeLivingPro";
import { Link } from "react-router-dom";




const HomeLiving=()=>{
    return(
        <Box>
          <Link to="/homeProduct"><HomeLivingBenner/></Link>
            <HomeLivingProduct/>

        </Box>
    )
}
export default HomeLiving;