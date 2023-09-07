import React from "react";

export default function Chat(props) {
  const className = `chat ${props.isLeft && "chat-left"}`;
  return (
    <>
      <div className={className}>
        <div className="chat-avatar">
          <a
            className="avatar avatar-online"
            data-toggle="tooltip"
            href="#"
            data-placement="right"
            title=""
          >
            <img src={props.gravatars} alt="..." />
            <i></i>
          </a>
        </div>
        <div className="chat-body">
          <div className="chat-content">
            <p>{props.message}</p>
            <time className="chat-time" dateTime="2015-07-01T11:37">
              {props.time}
            </time>
          </div>
        </div>
      </div>
    </>
  );
}
