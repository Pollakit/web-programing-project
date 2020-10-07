import React, { Component } from 'react';
import Header from '../component/Header.jsx';
import './index.css';

class MainPage extends Component {

  render() {
    return (
        <div>
            <Header text ={"Login"} isDisplaySignUp={true} isDisplayRightButton={true}/>
            <h1>Welcome to <br></br> find  your  spot on job</h1>
            
            <a href ="#"><span >Find job</span> <span>Arrow</span></a>
        </div>
    );
  }

}

export default MainPage;
