import React from 'react';
import Header from './component/Header.jsx'

function App() {
  return (
    <div className="App">
      <Header text ={"Login"} isDisplaySignUp={true} isDisplayRightButton={true}/>
    </div>
  );
}

export default App;
