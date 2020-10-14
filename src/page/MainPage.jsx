import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header.jsx';
import Rectangle from '../component/Rectangle.jsx';
import imageUrl from '../image/props1.jpg'

function MainPage(){

    return(
        <div>
            <Header text ={"Login"} isDisplaySignUp={ true } isDisplayRightButton={true}/>

            <div className="MainPageTopContainer">
                <div className="MainPageLeftItem">
                    <h1 style={{fontSize: '45px'}}>Choose a job you love,</h1>

                    <h2 style={{fontSize: '30px'}}>and you will never have to work a day in your life.</h2>
                    <p style={{fontSize: '17px'}}>—Confucius</p>

                    <div className="MainPageLink">
                        
                            <a href="/findJobPage">
                                <button className="MainPageButton" href="./FindjobPage.jsx">
                                    Find job
                                    <span className="MainPageButtonLeft">▶</span>
                                </button>
                            </a>
                            
                        <Rectangle 
                            width = "250px"
                            height = "20px"
                            backgroundColour = "#E9E3FF"
                            topMar = "20px"
                        />

                        <Rectangle 
                            width = "150px"
                            height = "20px"
                            backgroundColour = "#F1F7F3"
                            topMar = "13px"
                        />

                        <Rectangle 
                            width = "90px"
                            height = "20px"
                            backgroundColour = "#F9F2EC"
                            topMar = "13px"
                        />

                    </div>
                </div>

                <div className="MainPageRightItem">
                    <img style={ {height: "300px" }} src={imageUrl} />
                </div>

            </div>
        </div>
        
    );
}


export default MainPage;