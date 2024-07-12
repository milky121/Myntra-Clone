import { Box, Typography } from "@mui/material"
import { Homeliving, Homelivingbanner2, Homeliving2, Homeliving3 } from "../../Aproducts/HomeLivingimg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const P=styled(Typography)`
font-size:25px;
font-weight:bold;
margin:50px 90px;
  `
  const Div=styled(Box)`
  display:flex;
   `
   const Div2=styled(Box)`
   display:grid;
   grid-template-columns:1fr 1fr;
    margin:0px 60px;
    width:68%;
    // place-items: center;
    gap:10px; 
    row-gap:70px;
    `
   const Img=styled("img")({
    width:"100%",
   })
   const Img2=styled("img")({
    width:"100%",
    marginTop:80,
   })

   const Div3=styled(Box)`
 text-align:center;

   `
   const Img3=styled("img")({
    width:"30%",
   marginTop:"-4px",
  
   })
   const Brand=styled(Box)`
   display:grid;
   grid-template-columns:1fr 1fr 1fr 1fr 1fr;
   `


const HomeLivingProduct=()=>{
    return(
        <Box> 
             <P>NICE TO SEE YOU, COME ON IN!</P>
            <Div>
              <Link to="/homeProduct"> <Div2> 
                    {
                        Homeliving.map(e=>(
                            <Img src={e.url} alt="" />
                        ))
                    }
                </Div2></Link> 
                <Box>
                    <Typography>Furnishings & Bed Linen</Typography>
                    <Typography>Bed Sheets</Typography>
                    <Typography>Bedding Sets & Bed Covers</Typography>
                    <Typography>Bedding Sets & Bed Covers</Typography>
                    <Typography>Pillows & Pillow Covers</Typography>
                    <Typography>Cushions & Cushion Covers</Typography>
                    <Typography>Curtains</Typography>
                    <Typography>Mats & Dhurries</Typography>
                    <Typography>Carpets</Typography>
                    <Typography>Bath & Bed Linen</Typography>
                    <Typography>Towels & Towel Sets</Typography>
                    <Typography>Bath Robes</Typography>
                    <Typography>Bathroom Accessories</Typography>
                    <Typography>Shower Curtains</Typography>
                    <Typography>Bath Rugs</Typography>
                    <Typography>Vikram Homes Bed Linen</Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                    <Typography></Typography>
                </Box>
            </Div>
           <Link to="/homeProduct"><Div3>
                <Img2 src={Homelivingbanner2.url} alt=""/>
                   {
                Homeliving2.map(e=>(
                    <Img3 src={e.url} alt="" />
                ))
            }
            </Div3></Link> 
            <P>FEATURED BRANDS</P>
            <Brand>
            {
                Homeliving3.map(e=>(
                    <Img src={e.url} alt=""/>
                ))
}</Brand>
            

        </Box>
    )
}
export default HomeLivingProduct;