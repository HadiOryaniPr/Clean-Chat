import React, { Component } from "react";
import Heading from "./Components/Heading";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";

export default class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Chat",

      chatList: [
        {
          type: "sent",
          message: " Good morning, sir. What can I do for you",
          time: new Date().toLocaleDateString(),
        },
        {
          type: "recive",
          message: "Well, I am just looking around.",
          time: new Date().toLocaleDateString(),
        },
        {
          type: "sent",
          message: "If necessary, please ask me.",
          time: new Date().toLocaleDateString(),
        },
      ],

      gravatars: {
        user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
        user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(message) {
    this.setState((state) => {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            type: "sent",
            message,
            time: new Date().toLocaleDateString(),
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <div className="container bootstrap snippets">
          <div className="col-md-7 col-xs-12 col-md-offset-2">
            <div className="panel" id="chat">
              <Heading title={this.state.title} />
              <Body
                chatList={this.state.chatList}
                gravatars={this.state.gravatars}
              />
              <Footer handleSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
