import styled from "@emotion/styled";
import { Box, Typography, } from "@mui/material"
import {Manimg7 } from "../../Aproducts/Manimg"
import { Womancategory, Womanimg, Womanimg2, Womanimg3, Womanimg4, Womanimg5, Womanimg6 } from "../../Aproducts/Womanimg";
import { Link } from "react-router-dom";


const P=styled(Typography)`
font-size:25px;
margin:80px 30px 50px;
font-weight:bold;
  
  `
  const Div=styled(Box)`
 display:grid;
 grid-template-columns:1fr 1fr 1fr 1fr 1fr;
 place-items: center;
margin:0px 40px;

  `
const Image = styled('img')({
    height:"100%",
    width:"90%",
})

const Div2=styled(Box)`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
place-items: center;
margin:0px 40px;
`
const Image2 = styled('img')({
    height:"100%",
  width:"88%",

})

const Div3=styled(Box)`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr;
place-items: center;
margin:0px 40px;
`
const Image3= styled('img')({
    height:"95%",
  width:"90%",

})
const  Image4= styled('img')({
    height:"100%",
    width:"89%",

})


const Womanproduct=()=>{
    return(
        <Box>

            <Box>
            <P>BIGGEST DEALS ON TOP BRANDS</P>
          <Link >  <Div>
    {
    Womanimg.map(e=>(
        <Image src={e.url} alt="product" />
    ))
}
</Div>
</Link>
        </Box>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
            <P>CATEGORIES TO BAG</P>
            <Div2>
   
            <Link to="/kurtas"> <Image2 src={Womancategory[0].url} alt="product" /></Link>
            <Link to="/sarees">  <Image2 src={Womancategory[1].url} alt="product" /></Link>
            <Link to="/dresses">  <Image2 src={Womancategory[2].url} alt="product" /></Link>
            <Link to="/flats&heels"> <Image2 src={Womancategory[3].url} alt="product" /></Link>
            <Link to="/handbags">  <Image2 src={Womancategory[4].url} alt="product" /></Link>
            <Link to="/kid">  <Image2 src={Womancategory[5].url} alt="product" /></Link>
</Div2>
       
        </Box>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

        <Box>
            <P>EXPLORE TOP BRANDS</P>
    <Link to="/sareesBeauty">       
<Div3>
    {
    Womanimg2.map(e=>(
        <Image3 src={e.url} alt="product" />
    ))
}
</Div3>
</Link> 
        </Box>

        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 4 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

        <Box>
    <P>TRENDING IN WESTERN WEAR</P>
   <Link to="/dresses"> <Div3>
    {
        Womanimg3.map(e=>(
            <Image4 src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

     {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 5 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
    <P>TRENDING IN INDIAN WEAR</P>
   <Link to="/kurtas"> <Div3>
    {
        Womanimg4.map(e=>(
            <Image4 src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

<Box>
    <P>TRENDING IN SPORTS WEAR</P>
   <Link to="/sportsAll"> <Div3>
    {
        Womanimg5.map(e=>(
            <Image4 src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

<Box>
    <P>TRENDING IN FOOTWEAR</P>
   <Link to="/flats&heels"> <Div3>
    {
        Womanimg6.map(e=>(
            <Image4 src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

<Box>
    <P>TRENDING IN ACCESSORIES</P>
   <Link to="/watch&jewellery"> <Div3>
    {
        Manimg7.map(e=>(
            <Image4 src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

</Box>
    )
}
export default Womanproduct;