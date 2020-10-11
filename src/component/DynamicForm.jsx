import React, { Component } from "react";
import "./Index.css";
import GenerousInput from "./GenerousInput.jsx";
import TextAreaInput from "./TextAreaInput.jsx";

class DynamicForm extends Component {
  render() {
    const { inputs } = this.props;
    let inputLists = inputs.inputLists;
    let createdInputs;

    // if (inputClassification == "normal-input") {
    //   createdInputs = inputLists.map((input, index) => (
    //         <GenerousInput input={input} />
    //       ))
    // } else {
    //   createdInputs = inputLists.map((input, index) => (
    //     <TextAreaInput input={input} />
    //   ))
    // }

    createdInputs = inputLists.map((input, index) => (
              <GenerousInput input={input} />
            ))
            
    return (
      <div>
        {
          createdInputs
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