import styled from "@emotion/styled";
import { Box,  Typography, } from "@mui/material"
import Carousel from "react-multi-carousel"
import {Homerimg, Homerimg2, Homerimg3, Categoryimg }from "../../Aproducts/Homeimg";
import { Link } from "react-router-dom";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


const P=styled(Typography)`
font-size:25px;
margin:100px 30px 70px;
font-weight:bold;
  
  `
const Image = styled('img')({
    height:"100%",
    width:"99%",

    
    
})

const Div=styled(Box)`
text-align:center;
margin:-20px 30px;

`
const Image2 = styled('img')({
    height:"100%",
  width:"17%",
margin:20,

  
  
})

const Product=()=>{
    return(
        <Box>
            <Box>
            <P>MEDAL WORTHY BRANDS TO BAG</P>
            <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
         responsive={responsive}
         infinite={true}
         autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  slidesToSlide={6}
        >
    {
    Homerimg.map(e=>(
       <Link to="/manshirt&watches"><Image src={e.url} alt="product" /></Link> 
    ))
}
        </Carousel>
        </Box>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

<Box>
            <P>GRAND GLOBAL BRANDS</P>
            <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
         responsive={responsive}
         infinite={true}
         autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  slidesToSlide={6}
        >
    {
    Homerimg2.map(e=>(
        <Link to="/manTshirt&sportsShoes"><Image src={e.url} alt="product" /></Link>
    ))
}
        </Carousel>
        </Box>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<< 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

        <Box>
            <P>TRENDING IN SPORTS WEAR & TRENDING IN FOOTWEAR </P>
            <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
         responsive={responsive}
         infinite={true}
         autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  slidesToSlide={6}
        >

    {
    Homerimg3.map(e=>(
       <Link to="/sportsAll"><Image src={e.url} alt="product" /></Link> 
    ))
}
        </Carousel>
        </Box>

<Box>
    <P>SHOP BY CATEGORY</P>
    <Div>
    
    <Link to="/manshirt"><Image2 src={Categoryimg[0].url} alt="" /></Link>
    <Link to="/manTshirt"><Image2 src={Categoryimg[1].url} alt="" /></Link>
    <Link to="/manJeans"><Image2 src={Categoryimg[2].url} alt="" /></Link>
    <Link to="/kurtas"><Image2 src={Categoryimg[3].url} alt="" /></Link>
    <Link to=""><Image2 src={Categoryimg[4].url} alt="" /></Link>
    <Link to="/shoes"><Image2 src={Categoryimg[5].url} alt="" /></Link>
    <Link to="/handbags"><Image2 src={Categoryimg[6].url} alt="" /></Link>
    <Link to="/kurtas"><Image2 src={Categoryimg[7].url} alt="" /></Link>
    <Link to="/sportsAll"><Image2 src={Categoryimg[8].url} alt="" /></Link>
    <Link to="/sarees"><Image2 src={Categoryimg[9].url} alt="" /></Link>
    <Link to="/jewellery"><Image2 src={Categoryimg[10].url} alt="" /></Link>
    <Link to="/beauty"><Image2 src={Categoryimg[11].url} alt="" /></Link>
    <Link to=""><Image2 src={Categoryimg[12].url} alt="" /></Link>
    <Link to="/dresses"><Image2 src={Categoryimg[13].url} alt="" /></Link>
    <Link to=""><Image2 src={Categoryimg[14].url} alt="" /></Link>
    <Link to="/sportsShoes"><Image2 src={Categoryimg[15].url} alt="" /></Link>
    <Link to=""><Image2 src={Categoryimg[16].url} alt="" /></Link>
    <Link to=""><Image2 src={Categoryimg[17].url} alt="" /></Link>
   

   

    </Div>
</Box>
</Box>
    )
}
export default Product;