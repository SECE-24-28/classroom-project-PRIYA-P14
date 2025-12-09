// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
// import { SignInContainer, SignInForm, InputField, InputWithIcon, SelectField, SubmitButton, FieldWithIcon, IconLeft, HintList, HintItem } from './usersignin-style.js';

// const UserSignInComponent = () => {
//     return (
//         <SignInContainer>
//             <div className="login">
//             <h1>Welcome to <br />
//             Aptitude Guru Hem <span>LMS</span></h1>
//             </div>
//             <SignInForm>
//                 <label htmlFor="firstname">First Name</label>
//                 <InputField type="text" id="firstname" placeholder="Enter the first name" name="firstname" required />

//                 <label htmlFor="lastname">Last Name</label>
//                 <InputField type="text" id="lastname" placeholder="Enter the last name" name="lastname" required />

//                 <label htmlFor="college">Select College</label>
//                 <InputField type="text" id="college" placeholder="Enter the college name" name="college" required />

//                 <label htmlFor="passout">Select Passout</label>
//                 <SelectField id="passout" name="passout" required defaultValue="">
//                     <option value="" disabled>Select passout</option>
//                     <option value="2024">2024</option>
//                     <option value="2025">2025</option>
//                     <option value="2026">2026</option>
//                     <option value="2027">2027</option>
//                     <option value="2028">2028</option>
//                     <option value="2029">2029</option>
//                     <option value="2030">2030</option>
//                     <option value="2031">2031</option>
//                     <option value="2032">2032</option>
//                 </SelectField>

//                 <label htmlFor="department">Department</label>
//                 <SelectField id="department" name="department" required defaultValue="">
//                     <option value="" disabled>Select department</option>
//                     <option value="cse">CSE</option>
//                     <option value="it">IT</option>
//                     <option value="ece">ECE</option>
//                     <option value="eee">EEE</option>
//                     <option value="mech">Mechanical</option>
//                     <option value="civil">Civil</option>
//                     <option value="mba">MBA</option>
//                     <option value="mca">MCA</option>
//                 </SelectField>

//                 <label htmlFor="ugpg">UG or PG</label>
//                 <InputField type="text" id="ugpg" placeholder="Enter UG or PG" name="ugpg" required />

//                 <label htmlFor="email">Email</label>
//                 <InputField type="text" id="email" placeholder="Enter your email" name="email" required />

//                 <label htmlFor="mobile">Mobile</label>
//                 <InputField type="text" id="mobile" placeholder="Enter your mobile number" name="mobile" required />

//                 <label htmlFor="password">Password</label>
//                 <FieldWithIcon>
//                     <IconLeft>
//                         <FontAwesomeIcon icon={faLock} />
//                     </IconLeft>
//                     <InputWithIcon type="password" id="password" placeholder="Enter your password" name="password" required />

//                 </FieldWithIcon>

//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <FieldWithIcon>
//                     <IconLeft>
//                         <FontAwesomeIcon icon={faLock} />
//                     </IconLeft>
//                     <InputWithIcon type="password" id="confirmPassword" placeholder="Enter the confirm your password" name="confirmPassword" required />
//                 </FieldWithIcon>
//                 <HintList>
//                     <HintItem>minimun 8 character</HintItem>
//                     <HintItem>one special character</HintItem>
//                     <HintItem>one number</HintItem>
//                     <HintItem>one lowercase character</HintItem>
//                     <HintItem>one uppercase character</HintItem>
//                 </HintList>
//             </SignInForm>
//             <SubmitButton type="submit">Submit</SubmitButton>
//             <h1>Already have an Account Go to Log in</h1>
//         </SignInContainer>
//     );
// };

// export default UserSignInComponent;


import React, { useState } from "react";
import { RegisterFormStyle } from "./RegisterForm-style";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  // STATE FOR ALL INPUTS
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    college: "AGH B2C",
    passoutYear: "2024",
    department: "CSE",
    ugpg: "UG",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  // HANDLING INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // SUBMIT HANDLER (YOUR REQUESTED STYLE)
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("The first name is :", formData.firstName);
    console.log("The last name is :", formData.lastName);
    console.log("The college is :", formData.college);
    console.log("The passout year is :", formData.passoutYear);
    console.log("The department is :", formData.department);
    console.log("The UG/PG is :", formData.ugpg);
    console.log("The email is :", formData.email);
    console.log("The mobile number is :", formData.mobile);
    console.log("The password is :", formData.password);
    console.log("The confirm password is :", formData.confirmPassword);
  };

  return (
    <RegisterFormStyle>
      <div className="form-wrapper">
        <h2 className="title">
          Welcome to <span className="highlight">Aptitude Guru Hem LMS</span>
        </h2>

        <form className="form-box" onSubmit={handleSubmit}>
          {/* FIRST + LAST NAME */}
          <div className="row">
            <div className="field">
              <label>First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter first name"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Enter last name"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* COLLEGE + PASSOUT YEAR */}
          <div className="row">
            <div className="field">
              <label>Select College</label>
              <select name="college" onChange={handleChange}>
                <option value="" disabled>Select College</option>
                <option>AGH B2C</option>
              </select>
            </div>

            <div className="field">
              <label>Select Passout Year</label>
              <select name="passoutYear" onChange={handleChange}>
              <option value="" disabled>Select passout</option>
//                     <option value="2024">2024</option>
//                     <option value="2025">2025</option>
//                     <option value="2026">2026</option>
//                     <option value="2027">2027</option>
//                     <option value="2028">2028</option>
//                     <option value="2029">2029</option>
//                     <option value="2030">2030</option>
//                     <option value="2031">2031</option>
//                     <option value="2032">2032</option>
              </select>
            </div>
          </div>

          {/* DEPARTMENT + UG / PG */}
          <div className="row">
            <div className="field">
              <label>Department</label>
              <select name="department" onChange={handleChange}>
                <option value="" disabled>Select department</option>
//                     <option value="cse">CSE</option>
//                     <option value="it">IT</option>
//                     <option value="ece">ECE</option>
//                     <option value="eee">EEE</option>
//                     <option value="mech">Mechanical</option>
//                     <option value="civil">Civil</option>
//                     <option value="mba">MBA</option>
//                     <option value="mca">MCA</option>
              </select>
            </div>

            <div className="field">
              <label>UG or PG</label>
              <select name="ugpg" onChange={handleChange}>
              <option value="" disabled>Select ug or pg</option>
                <option>UG</option>
                <option>PG</option>
              </select>
            </div>
          </div>

          {/* EMAIL + MOBILE */}
          <div className="row">
            <div className="field">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Mobile</label>
              <div className="mobile-box">
                <select>
                  <option>IND</option>
                </select>
                <input
                  name="mobile"
                  type="text"
                  placeholder="Enter mobile number"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* PASSWORD + CONFIRM PASSWORD */}
          <div className="row">
            <div className="field">
              <label>Password</label>
              <div className="password-box">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter the password"
                  onChange={handleChange}
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <div className="password-box">
                <input
                  name="confirmPassword"
                  type={showCPassword ? "text" : "password"}
                  placeholder="Enter confirm password"
                  onChange={handleChange}
                />
                <span onClick={() => setShowCPassword(!showCPassword)}>
                  {showCPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>
          </div>

          {/* PASSWORD RULES */}
          <ul className="password-rules">
            <li>minimum 8 characters</li>
            <li>one special character</li>
            <li>one number</li>
            <li>one lowercase character</li>
            <li>one uppercase character</li>
          </ul>

        </form>
          <button type="submit" className="submit-btn">
            Submit
          </button>
      </div>
    </RegisterFormStyle>
  );
};

export default RegisterForm;
