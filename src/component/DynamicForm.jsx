import React, { Component } from "react";
import logo from "../image/logo.png";
import Button from "./Button.jsx";
import "./Index.css";
import GenerousInput from "./GenerousInput.jsx";

class DynamicForm extends Component {
  render() {
    const { inputs } = this.props;
    let inputLists = inputs.inputLists;

    return (
      <div>
        {inputLists.map((input, index) => (
          <GenerousInput
            inputName={input.inputName}
            inputType={input.inputType}
          ></GenerousInput>
        ))}
        <div className="vertical-spacer"></div>
      </div>
    );
  }
}

export default DynamicForm;
