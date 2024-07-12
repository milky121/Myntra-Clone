import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const Div=styled("div")({
marginTop:"100px",

"&>img":{
    width:"100%",
}
})


const Footer=()=>{
    return(
        <div>
            <Div >
        <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb8243162288265.63d2f19555aa8.png" alt=""></img>
        </Div>
        </div>
    )
}
export default Footer;