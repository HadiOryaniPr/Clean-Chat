import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleSubmit(e) {
    this.props.handleSubmit(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
  }

  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              value={this.state.inputValue}
              type="text"
              className="form-control"
              onChange={this.handleChange}
              placeholder="Say something"
            />
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                onClick={this.handleSubmit}
                type="button"
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
