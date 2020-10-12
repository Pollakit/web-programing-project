import React, { Component } from 'react';
import Header from '../component/Header.jsx';
import SearchBar from '../component/SearchBar.jsx';
import DroupBox from '../component/DroupBox.jsx'
import './index.css';

class FindJobPage extends Component {

  render() {
    return (
        <div>
            <Header text ={"Login"} isDisplaySignUp={ true } isDisplayRightButton={true}/>

            <span className="SearchBarContainerMain">
                  <SearchBar />
              </span>

              <span style = {{ 
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'felx-start',
                              height: '60px'
                            }}>
                  
                <DroupBox />    
              </span>
              
            <span className="FindJobContainer">

              <div className="FindJobItemLeft">

                <div className = "ScrollerStyleLeft">

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

              <div className="FindJobItem">

                <div className = "ScrollerStyRight">

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
