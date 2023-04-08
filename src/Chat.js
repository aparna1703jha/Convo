import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar , IconButton} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
        <IconButton>
        <SearchOutlinedIcon/>
        </IconButton>

        <IconButton>
        <AttachFileIcon/>
        </IconButton>

        <IconButton>
        <MoreVertIcon/>
        </IconButton>

        </div>
      </div>

      <div className="chat__body"></div>

      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
