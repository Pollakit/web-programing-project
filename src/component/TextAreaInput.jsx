import React, { Component } from "react";

class TextAreaInput extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {input} = this.props;
    let inputName = input.inputName;
    let trimmedInputName = inputName.split(" ").join("");
    let inputRows = input.inputRows;
    let inputCols = input.inputCols;

    return (
      <div>
        <label htmlFor={trimmedInputName} className="text-area-label"> {inputName} </label>

        <textarea className="input"
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

export default TextAreaInput;