import React from 'react';
import { GuruHemStyle } from './guru-hem-style.js';
import {Router} from 'react-router-dom';

const GuruHemComponent = () => {
return (
    <GuruHemStyle>
    <div className="Topbar">
    <div className="unlock">
    <h1>Unlock Your <br /> Potential With <span className="agh">AGH</span> <span className="lms">LMS</span></h1>
    <h2>Welcome to AGH LMS, your ultimate learning <br /> companion! We're delighted to have you embark on <br /> this journey of knowledge and growth with us</h2>
    </div>
    <div className="picture">
    <img src="pic.png" alt="Picture" style={{width: '550px', height: '500px', marginRight: '-1100px', bottom:'10', right: '500', marginBottom: '-550px', marginLeft: '100px'}}/>
    </div>
    <div className="phe">
    <img src="phone.png" alt="Phone" style={{width: '260px', height: '500px', marginRight: '-100px', right: '100', marginBottom: '50px', marginTop: '50px', marginLeft: '60px'}}/>
    </div>
    </div>
    <div className="start"> <h2>Start Your Journey</h2></div>
    <div className="buttons">
    <div className="get"> <h2>Get Started</h2></div>
    <div className="login"> <h2>Log In</h2></div>
    </div>

    <div className="description">
        <div className="imgbox">
        <img src="girl.png" alt="Girl" style={{width: 'auto', height: '400px', marginLeft: '200px', bottomRight:'100px', bottom:'70', right: '-10', marginBottom: '20px'}}/>
        </div>
        <div className="textblock">
        <h2>Empower Your Learning <br /></h2>
        <h2> Journey with <span className="glance"> Personalized Courses</span></h2>
        <h2>and Expert Support</h2>
        <h3>AGH LMS is dedicated to providing exceptional learning experiences <br /> tailored to your individual needs.
        <br />
        Our platform offers personalized learning paths, expert support, and <br /> a vast library of courses to help you achieve your goals.</h3>
    </div>
    </div>
    <div className="guruhem">
        <h1>
        Impact at a <span className="highlight">Glance</span>
        </h1>
    </div>
    <div className="Wholediv">
    <div className="subhead1">
        <div className="colleges"><h2>Colleges</h2> <h1>100+</h1>
        <img src="school.png" alt="Colleges" style={{width: 'auto', height: '120px', marginLeft: '320px', bottom:'70', right: '-10', top: '1000px', bottomRight: '100px', marginTop: '-300px', marginBottom: '20px'}} />
        </div>
        <div className="students"><h2>Students</h2><h1>1,00,000</h1>
        <img src="bag.png" alt="Students" style={{width: 'auto', height: '120px', marginLeft: '320px', bottomRight:'100px', bottom:'70', right: '-10', marginTop: '-300px', marginBottom: '20px'}} />
        </div>
    </div>


    <div className="subhead2">
    <div className="studymaterials"><h2>Study Materials</h2><h1>1000</h1>
    <img src="books.png" alt="Study Materials" style={{width: 'auto', height: '120px', marginLeft: '320px', bottomRight:'100px', bottom:'70', right: '-10', marginTop: '-300px', marginBottom: '20px'}} />
    </div>
    <div className="trainers"><h2>Professional Trainers</h2><h1>150</h1>
    <img src="trainers.png" alt="Trainers" style={{width: 'auto', height: '120px', marginLeft: '320px', bottomRight:'100px', bottom:'-25', right: '-10', marginTop: '-300px', marginBottom: '20px'}} />
</div>
    </div>
    </div>

    <div className="box">
    <div className="icon"></div>
    <div className="parent"></div>
    <div className="value">100+</div>
    <div className="name">Colleges</div>
    </div>
    </GuruHemStyle>
);
};

export default GuruHemComponent;
