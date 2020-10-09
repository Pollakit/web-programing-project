import React from 'react';
import FindJobPage from './page/FindJobPage.jsx'

function App() {
  return (
    <div className="App">
      <FindJobPage text ={"Login"} isDisplaySignUp={true} isDisplayRightButton={true}/>
    </div>
  );
}

export default App;
