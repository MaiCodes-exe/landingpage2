import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'



export const Feed = () => {
  return (

    <ImageList variant="masonry" cols={3} gap={8}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
 )
}



