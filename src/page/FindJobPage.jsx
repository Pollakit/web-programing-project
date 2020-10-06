import React, { Component } from 'react';
import Header from '../component/Header.jsx';
import './index.css';

class FindJobPage extends Component {

  render() {
    return (
        <div>
            <Header text ={"Login"} isDisplaySignUp={true} isDisplayRightButton={true}/>
            
            <span className="FindJobContainer">
              
              <div className="FindJobItemLeft">

                <lapel>Left</lapel>
                <input type = "text" />

                <div className = "ScrollerStyle">

                    As you can see, once there's enough text in this box, the box will grow scroll 
                    bars... that's why we call it a 
                    scroll box! You could also place an image into 
                    the scroll box.asdfasdfasdfasdfadsfaadsfadfaqerq
                    aasdfadfafdafdadfadfadsf
                    asdfasdfasdfasdfadsfaadsfadfaqerqa
                    asdfasdfasdfasdfadsfaadsfadfaqerqadfadfa
                    aasdfadfafdafdadfadfadsfadf
                    asdfasdfasdfasdfadsfaadsfadfaqerqadfadfaa
                    asdfasdfasdfasdfadsfaadsfadfaqerqadfadfaa
                    adfadfasdf
                </div>
              </div>

              <div className="FindJobItemRight">
                <lapel>Right</lapel>
                <input type = "text" />

                <div className = "ScrollerStyle">

                    As you can see, once there's enough text in this box, the box will grow scroll 
                    bars... that's why we call it a 
                    scroll box! You could also place an image into 
                    the scroll box.asdfasdfasdfasdfadsfaadsfadfaqerq
                    aasdfadfafdafdadfadfadsf
                    asdfasdfasdfasdfadsfaadsfadfaqerqa
                    asdfasdfasdfasdfadsfaadsfadfaqerqadfadfa
                    aasdfadfafdafdadfadfadsfadf
                    asdfasdfasdfasdfadsfaadsfadfaqerqadfadfaa
                    asdfasdfasdfasdfadsfaadsfadfaqerqadfadfaa
                    adfadfasdf
                  </div>
                
              </div>
              
            </span>
        </div>
    );
  }

}

export default FindJobPage;
