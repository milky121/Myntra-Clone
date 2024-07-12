import React from "react";
import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchInput=styled(Box)`
display:flex;
background:#f5f5f5;
border-radius:5px;
width:80%;
height:40px;
align-items:center;
`
const InputBaseSearch=styled(InputBase)`
width:100%;
margin-left:20px;
font-size:13px;
`
const Icon =styled(Box)`
color:#757575;
padding:10px;
margin-top:5px;


`

const Search=()=>{
    return(
       
        <SearchInput>
            <Icon><SearchIcon sx={{ fontSize: 20 }}/>
            </Icon>
            
            <InputBaseSearch   type="text" placeholder="Search for product, brand and more">

            </InputBaseSearch >

        </SearchInput>
    )
}
export default Search;