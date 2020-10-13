import React, { Component } from 'react';
import Header from '../component/Header.jsx';
import SearchBar from '../component/SearchBar.jsx';
import DropBox from '../component/DropBox.jsx';
import CompanyCard from '../component/CompanyCard.jsx';

import shopeLogo from '../image/ShopeeLogo.png';
import LineLogo from '../image/LineLogo.jpg';
import GoogleLogo from '../image/GoogleLogo.png';

import './index.css';

class FindJobPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DropBox: [
        { cotenetName: `JobTitle▼`,
          dropItems : ['1','2','3','4','5']
        },
        {
          cotenetName: `Location▼`,
          dropItems : ['1','2','3','4','5']
        },
        {
          cotenetName: `Company▼`,
          dropItems : ['1','2','3','4','5']
        }

      ],
      
      CompanyCard: [
        {
          logo : shopeLogo,
          height : '70px',
          width : '70px',
          jobTitle : 'Assoiate Business Analyst',
          company : 'Shopee',
          location : 'Bangkok, Bangkok city Thailand'
        },
        {
          logo : LineLogo,
          height : '50px',
          width : '70px',
          jobTitle : 'Assoiate Business Analyst',
          company : 'Line',
          location : 'Bangkok, Bangkok city Thailand'
        },
        {
          logo : GoogleLogo,
          height : '70px',
          width : '70px',
          jobTitle : 'Assoiate Business Analyst',
          company : 'Google',
          location : 'Bangkok, Bangkok city Thailand'
        }

 
      ]
    }
  }

  render() {
    return (
        <div>
            <Header text ={"Login"} isDisplaySignUp={ true } isDisplayRightButton={true}/>

            <span className="SearchBarContainerMain">
                  <SearchBar />
              </span>

              <span className="DropBoxContainer">
                
                { this.state.DropBox.map( item => <DropBox cotenetName ={ item.cotenetName} dropItems = { item.dropItems } /> 
                                        )                                     
                }

              </span>
              
            <span className="FindJobContainer">

              <div className="FindJobItemLeft">

                <div className = "ScrollerStyleLeft">

                    { this.state.CompanyCard.map( item => 
                      <div className="CompanyCardFindJobPageContainer"> 
                        <CompanyCard 
                          logo ={ item.logo} 
                          height = { item.height }
                          width = { item.width }
                          jobTitle = { item.jobTitle }
                          company = { item.company }
                          location = { item.location }
                        /> 
                      </div>
                                                )                                     
                    }

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
