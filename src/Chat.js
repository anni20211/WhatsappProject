import React,{useState} from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar,IconButton} from '@mui/material';
import axios from "./Axios";
import "./Chat.css";

import MicIcon from '@mui/icons-material/Mic';import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
function Chat({messages}) {
  const [input,setInput]= useState("");
  const sendMessage=async(e)=>{
    e.preventDefault();
    await axios.post("/messages/new",{
    message:input,
    name:"ankit kumar",
    timestamp:"just now!",
    received:true,
    });
    setInput("");
  }
  return (
    <div className='chat' >
      <div className='chat_header' >
      <Avatar/>
      <div className='chatheader_info' >
       <h3>Room name</h3>
       <p>Last seen at.....</p>
      </div>
      <div className='header_Right'  >
      <IconButton>
      <SearchIcon/>
      </IconButton>
      <IconButton>
       < AttachFileIcon/>
      </IconButton>
      <IconButton>
        <MoreVertIcon/>
      </IconButton>
      </div>
      </div>
      <div className='chat_body'  >
      {messages.map((message)=>{
        return(
        <p className={`chat_message ${message.received && "chat_reciever"}`}>
      <span className='chat_name'  >{message.name}</span>
      {message.message}
      <span className='chat_timestamp'  >
       {message.timesatmp} 
      </span>
       </p>
        )
      })}
      </div>
      <div className='chat_footer'  >
        <InsertEmoticonIcon/>
        <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Type a message" />
           <button onClick={sendMessage} type="submit" > Send a message 
           </button>
        </form>
        <MicIcon/> 
      </div>
    </div>
  );
}
export default Chat;

