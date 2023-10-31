import React from 'react'
import { Box , Stack} from '@mui/material'

// import styles from './Videos.module.css'
import ChannelCard from '../channelCard/channelCard'
import VideoCard from '../videoCard/videoCard'
export default function Videos({videos ,direction}) {
 if(!videos?.length) return 'loading......./'
 
  return (
    <>
<Stack direction={direction ||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
    {videos?.map((item, idx) => (
      <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
</Stack>    
    </>
  )
}
