import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';












export const Feed = () => {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
    <ImageList variant="masonry" cols={3} gap={8}>
  
        <ImageListItem>
   
        </ImageListItem>
    
    </ImageList>
  </Box>  )
}
