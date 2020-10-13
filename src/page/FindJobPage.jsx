import React, { Component } from 'react';
import Header from '../component/Header.jsx';
import SearchBar from '../component/SearchBar.jsx';
import DropBox from '../component/DropBox.jsx';
import CompanyCard from '../component/CompanyCard.jsx';
import CompanyCard2 from '../component/CompanyCard2.jsx';
import CompanyDesciption from '../component/CompanyDescription.jsx';

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
          dropItems : ['1','2','3','4']
        },
        {
          cotenetName: `Location▼`,
          dropItems : ['1','2','3']
        },
        {
          cotenetName: `Company▼`,
          dropItems : ['1','2','3','4','5','6']
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
      ],
      CompanyCard2:[
        {
          logo: shopeLogo,
          companyName: 'Shopee'
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

              <div className="FindJobItemRight">

                <div className = "ScrollerStyRight">

                    <div className="CompanyCardFindJobPageContainer2"> 
                        <CompanyCard2
                          logo ={ this.state.CompanyCard2[0].logo } 
                          height = { '100px' }
                          width = { '130px' }
                          jobTitle = { 'Assoiate Business Analyst' }
                          company = { this.state.CompanyCard2[0].companyName  }
                          location = { 'Bangkok, Bangkok city Thailand' }
                        /> 
                      </div>

                      <div className="CompanyCardFindJobPageContainer2"> 
                        <CompanyDesciption
                          detail = {"some thing very long about the job description"}
                        /> 
                      </div>

                  </div>
                
              </div>
              
            </span>
        </div>
    );
  }

}

export default FindJobPage;
