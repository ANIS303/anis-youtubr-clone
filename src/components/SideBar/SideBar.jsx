import React  from 'react'
import {  Stack } from '@mui/material'
import { categories } from '../../utils/constants'
export default function SideBar({selectedCaregory ,setselectedCaregory}) {


  return (
    <>
       <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
        {categories.map((category) =>(
          <button className='category-btn'
          onClick={() => setselectedCaregory (category.name)}
          style={{
            background: category.name === selectedCaregory && "#fc1503",
            color:"white"
          }}
          key={category.name}>
           <span 
           style={{color:category.name === 
            selectedCaregory ? "white" : "red", marginRight:"15px"}}>{category.icon}</span> 
           <span style={{ opacity: category.name === selectedCaregory ? "1" : "0.8" }}>{category.name}</span> 

          </button>
        ))}
      </Stack>
    </>
  )
}
