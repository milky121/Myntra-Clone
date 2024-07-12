import styled from "@emotion/styled";
import { Box, Typography, } from "@mui/material"
import { KidToppicksimg, KidsExploreimg, KidsFashionimg, KidsFavbrandsimg, kidsBrandsimg, kidsBrandsimg2, kidsBugetimg, kidsSpaceimg } from "../../Aproducts/Kidsimg";
import { Link } from "react-router-dom";


const P=styled(Typography)`
font-size:25px;
margin:90px 90px 60px;
font-weight:bold;
  
  `
  const Div=styled(Box)`
 display:grid;
 grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
 place-items: center;
  `
const Image = styled('img')({
    height:"100%",
    width:"100%",
})

const Div2=styled(Box)`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
place-items: center;

`
const Div3=styled(Box)`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
place-items: center;
margin-bottom:-45px;
`

const Div4=styled(Box)`
display:grid;
grid-template-columns: 1fr 1fr ;
place-items: center;
`
const Div5=styled(Box)`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
place-items: center;
margin-bottom:-45px;
`
const KidsProduct=()=>{
    return(
        <Box>

            <Box>
            <P>FAVOURITE BRANDS</P>
            <Div>
    {
    KidsFavbrandsimg.map(e=>(
        <Image src={e.url} alt="product" />
    ))
}
</Div>
        </Box>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
            <P>TOP PICKS</P>
           <Link to="/kid"> <Div2>
    {
    KidToppicksimg.map(e=>(
        <Image src={e.url} alt="product" />
    ))
}
</Div2>
</Link>
       
        </Box>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

        <Box>
            <P>ICONIC BRANDS</P>

            <Link to="/kid">
            <Div3>
    {
    kidsBrandsimg.map(e=>(
        <Image src={e.url} alt="product" />
    ))
}
</Div3>
</Link>
        </Box>

        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 4 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
    <P>FASHION & ESSENTIALS</P>

  <Link to="/kid">  <Div3>
    {
        KidsFashionimg.map(e=>(
            <Image src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

     {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 5 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
    <P>EXPLORE MORE</P>
    <Link to="/kid"> <Div4>
    {
        KidsExploreimg.map(e=>(
            <Image src={e.url} alt="" />
        ))
    }
    </Div4></Link>
</Box>

<Box>
    <P>THE KIDS SPACE</P>
    <Div4>
    {
        kidsSpaceimg.map(e=>(
            <Image src={e.url} alt="" />
        ))
    }
    </Div4>
</Box>

<Box>
    <P>BUDGET BUY</P>
    <Div5>
    {
        kidsBugetimg.map(e=>(
            <Image src={e.url} alt="" />
        ))
    }
    </Div5>
</Box>

<Box>
    <P>SHOP MORE BRANDS</P>
    <Div3>
    {
        kidsBrandsimg2.map(e=>(
            <Image src={e.url} alt="" />
        ))
    }
    </Div3>
</Box>

</Box>
    )
}
export default KidsProduct;