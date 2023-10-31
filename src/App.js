import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import ChannelDetail from './components/ChannelDetail/ChannelDetail'
import Feed from './components/Feed/Feed'
import SearchFeed from './components/SearchFeed/SearchFeed'
import VideoDetail from './components/VideoDetail/VideoDetail'
import Navbar from './components/Navbar/Navbar'
const App = () =>  (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
<Navbar/>
<Routes>
  <Route path='/' exact element={<Feed/>}/>
  <Route path='/video/:id'  element={<VideoDetail/>}/>
  <Route path='/channel/:id'  element={<ChannelDetail/>}/>
  <Route path='/search/:searchTerm'  element={<SearchFeed/>}/>

</Routes>
    </Box>
    </BrowserRouter>
  )


export default App