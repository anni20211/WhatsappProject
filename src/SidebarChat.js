import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";
function SidebarChat(props) {
  return (
    <div className='sidebarchat' >
        <Avatar/>
        <div className='sidebarchat_info'  >
          <h2>{props.name}</h2>
          <p>This is an interesting message</p>
        </div>
    </div>
  );
}

export default SidebarChat;
