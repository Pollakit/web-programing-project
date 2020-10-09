import React, { Component } from "react";
import "./Index.css";
import GenerousInput from "./GenerousInput.jsx";

class DynamicForm extends Component {
  render() {
    const { inputs } = this.props;
    let inputLists = inputs.inputLists;

    return (
      <div>
        {inputLists.map((input, index) => (
          <GenerousInput input={input} />
        ))}
        <div className="vertical-spacer"></div>
      </div>
    );
  }
}

export default DynamicForm;
