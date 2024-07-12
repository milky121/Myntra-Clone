import styled from "@emotion/styled";
import { Box, Typography, } from "@mui/material"
import {Manimg,Mancategory,Manimg2,Manimg3,Manimg4,Manimg5,Manimg6,Manimg7 } from "../../Aproducts/Manimg"
import { Link } from "react-router-dom";


const P=styled(Typography)`
font-size:25px;
margin:80px 30px 50px;
font-weight:bold;
  
  `
  const Div=styled(Box)`
 display:grid;
 grid-template-columns:1fr 1fr 1fr 1fr;
 place-items: center;
margin:0px 40px;

  `
const Image = styled('img')({
    height:"100%",
    width:"92%",
})

const Div2=styled(Box)`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
place-items: center;
margin:0px 40px;
`
const Image2 = styled('img')({
    height:"100%",
  width:"87%",
transition: "0.5s",
 ":hover":{
    transform: "scale(1.2)",
 }
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
    width:"88%",

})

const Image5=styled('img')({
    height:"100%",
    width:"89%",

})

const Manproduct=()=>{
    return(
        <Box>

            <Box>
            <P>BIGGEST DEALS ON TOP BRANDS</P>
          <Link to="/jeans&sportShoes">   <Div>
    {
    Manimg.map(e=>(
     <Image src={e.url} alt="product" /> 
    ))
}
</Div></Link> 
        </Box>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
            <P>CATEGORIES TO BAG</P>
            <Div2>
    
    
        <Link to="/manshirt"><Image2 src={Mancategory[0].url} alt="" /></Link>
        <Link to="/manTshirt"><Image2 src={Mancategory[1].url} alt="" /></Link>
        <Link to="/manJeans"><Image2 src={Mancategory[2].url} alt="" /></Link>
        <Link to="/sportsWear"><Image2 src={Mancategory[3].url} alt="" /></Link>
        <Link to="/shoes"><Image2 src={Mancategory[4].url} alt="" /></Link>
        <Link to="/kid"><Image2 src={Mancategory[5].url} alt="" /></Link>
    

</Div2>
       
        </Box>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

        <Box>
            <P>EXPLORE TOP BRANDS</P>
<Link to="/manTshirt">
<Div3>
    {
    Manimg2.map(e=>(
        <Image3 src={e.url} alt="product" />
    ))
}
</Div3>
</Link>
        </Box>

        {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 4 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
    <P>MYNTRA LUXE</P>
   <Link to="/watch&jewellery"> 
   <Div2>
    {
        Manimg3.map(e=>(
            <Image4 src={e.url} alt="" />
        ))
    }
    </Div2>
    </Link>
</Box>

     {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 5 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
    <P>TRENDING IN INDIAN WEAR</P>
    <Div3>
    {
        Manimg4.map(e=>(
            <Image5 src={e.url} alt="" />
        ))
    }
    </Div3>
</Box>

<Box>
    <P>TRENDING IN SPORTS WEAR</P>
    <Link to="/sportsAll"><Div3>
    {
        Manimg5.map(e=>(
            <Image5 src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

<Box>
    <P>TRENDING IN FOOTWEAR</P>
  <Link to="/shoes">  <Div3>
    {
        Manimg6.map(e=>(
            <Image5 src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

<Box>
    <P>TRENDING IN ACCESSORIES</P>
   <Link to="/watch"> <Div3>
    {
        Manimg7.map(e=>(
            <Image5 src={e.url} alt="" />
        ))
    }
    </Div3>
    </Link>
</Box>

</Box>
    )
}
export default Manproduct;