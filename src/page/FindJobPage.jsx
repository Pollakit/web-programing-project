import React, { Component } from 'react';
import Header from '../component/Header.jsx';
import SearchBar from '../component/SearchBar.jsx';
import DropBox from '../component/DropBox.jsx';
import CompanyCard from '../component/CompanyCard.jsx';

import shopeLogo from '../image/ShopeeLogo.png';

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
                  
                <DropBox 
                  cotenetName ={`JobTitle▼`}
                  dropItems = {['1','2','3','4','5']}
                />

                <DropBox 
                  cotenetName ={"Location▼"}
                  dropItems = {['1','2','3','4','5','6']}
                />  

                <DropBox 
                  cotenetName ={"Company▼"}
                  dropItems = {['1','2','3']}
                />
              </span>
              
            <span className="FindJobContainer">

              <div className="FindJobItemLeft">

                <div className = "ScrollerStyleLeft">

                    <div style={{ width: '250px', height: '10px', marginBottom: '80px'}}> 
                      <CompanyCard
                        logo = { shopeLogo }
                        height = {'70px'}
                        width = {'70px'}
                        jobTitle = {'Assoiate Business Analyst'}
                        company = {'Shopee'}
                        location = {'Bangkok, Bangkok city Thailand'}
                      />
                    </div>

                    <div style={{ width: '250px', height: '10px', margin: '80px 0'}}> 
                      <CompanyCard
                        logo = { shopeLogo }
                        height = {'70px'}
                        width = {'70px'}
                        jobTitle = {'Assoiate Business Analyst'}
                        company = {'Shopee'}
                        location = {'Bangkok, Bangkok city Thailand'}
                      />
                    </div>

                    <div style={{ width: '250px', height: '10px', margin: '80px 0'}}> 
                      <CompanyCard
                        logo = { shopeLogo }
                        height = {'70px'}
                        width = {'70px'}
                        jobTitle = {'Assoiate Business Analyst'}
                        company = {'Shopee'}
                        location = {'Bangkok, Bangkok city Thailand'}
                      />
                    </div>

                    <div style={{ width: '250px', height: '10px', margin: '80px 0'}}> 
                      <CompanyCard
                        logo = { shopeLogo }
                        height = {'70px'}
                        width = {'70px'}
                        jobTitle = {'Assoiate Business Analyst'}
                        company = {'Shopee'}
                        location = {'Bangkok, Bangkok city Thailand'}
                      />
                    </div>

                    <div style={{ width: '250px', height: '10px', margin: '80px 0'}}> 
                      <CompanyCard
                        logo = { shopeLogo }
                        height = {'70px'}
                        width = {'70px'}
                        jobTitle = {'Assoiate Business Analyst'}
                        company = {'Shopee'}
                        location = {'Bangkok, Bangkok city Thailand'}
                      />
                    </div>
                    
                    <div style={{ width: '250px', height: '10px', margin: '80px 0'}}> 
                      <CompanyCard
                        logo = { shopeLogo }
                        height = {'70px'}
                        width = {'70px'}
                        jobTitle = {'Assoiate Business Analyst'}
                        company = {'Shopee'}
                        location = {'Bangkok, Bangkok city Thailand'}
                      />
                    </div>
     
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
