
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bannerData from "../../constants/Data"
import  {Box,styled } from "@mui/material"



const Img =styled("img")({
  marginTop:120,
  width:"100%",
  
 
})
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Banner=()=>{
    return(
      <Box>
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
         responsive={responsive}
         infinite={true}
         autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  slidesToSlide={1}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData.map((data)=>{
                    
                   return <Img src={data.url} alt="banner"/>
                
})

            }
      
      </Carousel>
      </Box>
    )

}
export default Banner;