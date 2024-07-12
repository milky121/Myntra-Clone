import styled from "@emotion/styled";
import { Box } from "@mui/material"



const Boxs=styled(Box)`
margin-top:70px;

& > img{
    width:100%;
}
`
const Boxstyle=styled(Box)`
display:flex;
margin-top:70px;
gap:40px;
& > img{
    width:49%;
   height:100%;
}
`

const BannerDx=()=>{
    return(
        <Box>
            <Boxs>
            <img src="https://s3-img.pixpa.com/com/large/55219/1567225567-10168-couple-sitting-30x15-ft-unipole-01.jpg" alt=""/>
            </Boxs>

        <Boxstyle>
            <img src="https://cdn.zoutons.com/images/originals/blog/1689414889280.jpg_1689414894.png"  alt=""/>

            <img src="https://cdn.zoutons.com/images/originals/blog/1689414881558.jpg_1689414886.png"  alt=""/>
        </Boxstyle>
        </Box>
    )
}
export default BannerDx;