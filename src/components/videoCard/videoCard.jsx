import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia, Stack, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {  demoVideoUrl, demoVideoTitle, demoChannelUrl } from "../../utils/constants";
export default function VideoCard({ video: { id: { videoId }, snippet } }) {
  
  return (
    <>
     <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <CardMedia image={snippet?.thumbnails?.high?.url } alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
        
      </Link>
      <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }} color="#FFF">
                  {(snippet?.description).slice(0, 40)} 
                </Typography>
              
              </Stack>
<Stack direction="row" justifyContent="space-between"  >
<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle }
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
                <Typography variant="subtitle2" sx={{ opacity: 0.7 }} color="#FFF">
                  {(snippet?.publishTime).slice(0, 10)} 
                </Typography>
                

  </Stack>      
    </CardContent>
  </Card>
    
    
    
    </>
  )
}
