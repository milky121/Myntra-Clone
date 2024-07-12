import { useEffect } from "react";
import Product from "./Product";


import Banner from "./Banner";
import {Box,styled} from "@mui/material"
import BannerDx from "./Bannerdx";
import { Link } from "react-router-dom";

const HomeStyle = styled(Box)`
background:white;
`


 const Home=()=>{


    return(
        <HomeStyle >
               <Link to="/item"> <Banner/></Link>
                <BannerDx/>
                <Product/>
                
        </HomeStyle >
    )
}
export default Home;