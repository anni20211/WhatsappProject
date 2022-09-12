import React from 'react';
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
  return (
    <div className="sidebar"  >
      <div className="sidebar_header"  >
      <div className= "sidebar_left" >
      <Avatar src="https://avatars.githubusercontent.com/u/94830944?s=400&u=efaa8ddddde6afc222fba53b6ced2db3327cc206&v=4"/>
      </div>
      <div className="sidebar_right" >
      <IconButton>
      <ChatIcon/>
      </IconButton>
      <IconButton>
       <DonutLargeIcon/>
      </IconButton>
      <IconButton>
          <MoreVertIcon/>
      </IconButton>
      </div>
      </div>
      <div className='sidebar_search'  >
      <div className='search_container'  >
       <SearchIcon/>
       <input type="text" placeholder='Search or start new chat'/>
      </div>
      </div>
      <div className='sidebar_chats'  >
        <SidebarChat name="ayush" />
        <SidebarChat name="aditya"  />
        <SidebarChat name="nishant"/>
        <SidebarChat name="shivang"/>
      </div>
      
    </div>
  );
}

export default Sidebar;
