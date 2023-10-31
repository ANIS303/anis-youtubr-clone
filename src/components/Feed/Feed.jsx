import React,{useState , useEffect} from 'react'

import { Box , Stack, Typography } from '@mui/material'
import {fetchFromAPI} from '../../utils/fetchFormAPI'
import SideBar from '../SideBar/SideBar'
import Videos from '../Videos/Videos'
export default function Feed() {
const [selectedCaregory, setselectedCaregory] = useState('New')
const [videos , setVideo] = useState([])
useEffect(() => {

  fetchFromAPI(`search?part=snippet&q=${selectedCaregory}`)
  .then((data) => setVideo(data?.items));
},[selectedCaregory])


  return (
    <>
    <Stack sx={{flexDirection:{sx:"column",
  md:"row"}}}>
<Box sx={{
  height:{sx:"auto", md:"92vh",},
   borderRight:"1px solid #3d3d3d",
    px:{sx:0 ,md:2}}}>
<SideBar
 selectedCaregory={selectedCaregory} setselectedCaregory={setselectedCaregory}/>

<Typography className='copyright' variant='body2' sx={{mt:1.5 , color:"#fff"}}>
  copyright 2022 andddgvddis
</Typography>


</Box>
<Box p={2} sx={{overflow:"auto", height:"90vh", flex:2}}>
<Typography variant='h4' fontWeight={"bold"} mb={2} sx={{color:"white"}}>
{selectedCaregory} <span style={{color:"#f31503"}}> videos </span>
</Typography>

    <Videos videos={videos} />
</Box>
    </Stack>
    
    </>
  )
}
