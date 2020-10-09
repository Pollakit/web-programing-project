import React, { Component } from "react";

class GenerousInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      let inputName = this.input.inputName;
  let trimmedInputName = inputName.split(" ").join("");
  let inputRows = this.input.inputRows;
  let inputCols = this.input.inputCols;

  return (
    <div>
      <label htmlFor={trimmedInputName}> {inputName} </label>

      <textarea
        id={trimmedInputName}
        name={trimmedInputName}
        rows={inputRows}
        cols={inputCols}
      ></textarea>
    </div>
  );

    // return (
    //   <div>
    //     <label htmlFor={trimmedInputName}>{inputName}</label>
    //     <input type={inputType} name={inputName} />
    //   </div>
    // );
  }
}

export default GenerousInput;