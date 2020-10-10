import React, { Component } from "react";
import "./Index.css";
import GenerousInput from "./GenerousInput.jsx";
import TextAreaInput from "./TextAreaInput.jsx";

class DynamicForm extends Component {
  render() {
    const { inputs } = this.props;
    let inputLists = inputs.inputLists;
    let inputClassification = inputs.inputClassification;
    let createdInput;

    if (inputClassification == "normal-input") {
      createdInput = inputLists.map((input, index) => (
            <GenerousInput input={input} />
          ))
    } else {
      createdInput = inputLists.map((input, index) => (
        <TextAreaInput input={input} />
      ))
    }


    return (
      <div>
        {
          createdInput
        }
        <div className="vertical-spacer"></div>
      </div>
    );
  }
}

export default DynamicForm;

// <div>
//   {inputLists.map((input, index) => (
//     <GenerousInput input={input} />
//   ))}
//   <div className="vertical-spacer"></div>
// </div>