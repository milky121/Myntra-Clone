import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  {Box,styled } from "@mui/material"
import { Homelivingbanner } from "../../Aproducts/HomeLivingimg";


const Div=styled(Box)`
text-align: center;

`
const Img =styled("img")({
  marginTop:105,
  width:"92%",
 
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


const HomeLivingBenner=()=>{
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
                Homelivingbanner.map((e)=>{
                   
                   return <Div> <Img src={e.url} alt="banner"/>
                   </Div>
})

            }
            
      
      </Carousel>
      </Box>
    )

}
export default HomeLivingBenner;