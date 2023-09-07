import React from "react";
import Chat from "./Chat";

export default function Body(props) {
  const chats = props.chatList.map((chat, index) => {
    const isLeft = "recive" === chat.type;
    return (
      <>
        <Chat
          key={index}
          gravatars={isLeft ? props.gravatars.user2 : props.gravatars.user1}
          message={chat.message}
          time={isLeft}
          isLeft={isLeft}
        />
      </>
    );
  });

  return (
    <>
      <div className="panel-body">
        <div className="chats">{chats}</div>
      </div>
    </>
  );
}
