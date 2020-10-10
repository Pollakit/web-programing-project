import React, { Component } from "react";
import CreateNormalInput from "./GenerousInput.jsx";
import CreateTextAreaInput from "./GenerousInput.jsx";
import CreateInput from "./GenerousInput.jsx";

class GenerousInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { input } = this.props;
    let inputName = input.inputName;
    let inputType = input.inputType;
    let trimmedInputName = inputName.split(" ").join("");

    return (
      <div>
        <label htmlFor={trimmedInputName}>{inputName}</label>
        <input type={inputType} name={inputName} className="input" />
      </div>
    );
  }
}

export default GenerousInput;

// CreateInput(props) {
//   let inputName = this.input.inputName;
//   let inputType = this.input.inputType;

//   if (inputType != "textarea") {
//     console.log("Not creating textarea");
//     return <CreateNormalInput />;
//   } else {
//     console.log("Creating Textarea");
//     return <CreateTextAreaInput />;
//   }
// }

// CreateNormalInput(props) {
//   let inputName = this.input.inputName;
//   let inputType = this.input.inputType;
//   let trimmedInputName = inputName.split(" ").join("");

//   return (
//     <div>
//       <label htmlFor={trimmedInputName}>{inputName}</label>
//       <input type={inputType} name={inputName} />
//     </div>
//   );
// }

// CreateTextAreaInput(props) {
//   let inputName = this.input.inputName;
//   let trimmedInputName = inputName.split(" ").join("");
//   let inputRows = this.input.inputRows;
//   let inputCols = this.input.inputCols;

//   return (
//     <div>
//       <label htmlFor={trimmedInputName}> {inputName} </label>

//       <textarea
//         id={trimmedInputName}
//         name={trimmedInputName}
//         rows={inputRows}
//         cols={inputCols}
//       ></textarea>
//     </div>
//   );
// }
