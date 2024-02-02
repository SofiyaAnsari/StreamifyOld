import React from 'react'
import "./listItem.scss";
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
export default function ListItem() {
  return (
    <div className='listItem'>
   <img src='../public/movie3.jpg' alt="" />
   <div className="itemInfo">
    <div className="icons">
        <PlayArrow />
        <Add/>
<ThumbUpAltOutlined/>
<ThumbDownAltOutlined/>

    </div>
   </div>
    </div>
  )
}
