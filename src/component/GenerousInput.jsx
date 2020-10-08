import React, { Component } from "react";

class GenerousInput extends Component {
  render() {
    const { inputName, inputType } = this.props;

    return (
      <div>
        <label htmlFor={inputName}>{inputName}</label>
        <input type={inputType} name={inputName} />
      </div>
    );
  }

  // CreateInput(props) {
  //   if (inputType != "textarea") {
  //     <CreateNormalInput></CreateNormalInput>;
  //   }
  // }

  // CreateNormalInput(props) {
  //   const { inputName, inputType } = this.props;

  //   return (
  //     <div>
  //       <label htmlFor={inputName}>{inputName}</label>
  //       <input type={inputType} name={inputName} />
  //     </div>
  //   );
  // }

  // CreateTextAreaInput(props) {
  //   <textarea id=""></textarea>;
  // }
}

export default GenerousInput;
