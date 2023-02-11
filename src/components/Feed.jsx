import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import {SideBar, Videos} from "./" 
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState("New");
  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    (async ()=>{
      const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.items);
    })()
  },[selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: 'row' } }}>
      <Box 
      sx =  {{
        height:{sx:'auto', md: '92vh' },
        borderRight: '2px solid #3d3d3d',
        px: { sx: 0, md:0 },
        width:{sx:'100%'}
      }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          Copyright &copy; 2023 Bhuwan
        </Typography>
      </Box>

      <Box 
        p={2}
        sx={{
          overflowY:'auto',
          height:'90vh',
          flex:2
        }}
      >

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: 'white'
          }}>
          {selectedCategory} <span style={{color:"#F31503"}} >videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
