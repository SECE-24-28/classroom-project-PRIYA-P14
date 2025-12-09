// import styled from 'styled-components';

// export const SignInContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
//   width: 1500px;
// 	height: 150vh;
// 	background-color: #f5f5f5;
  
// 	.login h1 {
// 		font-size: 2rem;
// 		color: #2e0fc8ff;
// 		text-align: center;
// 		margin-bottom: 1rem;
// 	}

// 	.login h1 span {
// 		color: #ff5733;
// 	}
// `;
// export const SignInForm = styled.form`
// 	display: flex;
// 	flex-direction: column;
// 	padding: 2rem;
// 	background-color: #ffffff;
// 	border-radius: 8px;
//   width: 700px;
//   height: auto;
// 	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;
// export const h1 = styled.h1`
//   margin-top: 20px;
//   font-size: 16px;
//   color: #555;
//   text-align: center;
// `;
// export const InputField = styled.input`
// 	margin-bottom: 1rem;
// 	padding: 0.75rem;
// 	border: 1px solid #ccc;
// 	border-radius: 4px;
// 	font-size: 1rem;


// 	&:focus {
// 		border-color: #007bff;
// 		outline: none;
// 	}

// `;

// export const SelectField = styled.select`
// 	margin-bottom: 1rem;
// 	padding: 0.75rem;
// 	border: 1px solid #ccc;
// 	border-radius: 4px;
// 	font-size: 1rem;
// 	background-color: #fff;

// 	&:focus {
// 		border-color: #007bff;
// 		outline: none;
// 	}
// `;

// export const FieldWithIcon = styled.div`
// 	position: relative;
// `;

// export const IconLeft = styled.span`
// 	position: absolute;
// 	left: 12px;
// 	top: 50%;
// 	transform: translateY(-50%);
// 	color: #9aa0a6;
// 	pointer-events: none;
// 	font-size: 0.95rem;
// `;

// export const InputWithIcon = styled(InputField)`
// 	padding-left: 2.5rem;
// `;

// export const SubmitButton = styled.button`
// 	padding: 0.75rem;
// 	background-color: #007bff;
// 	color: #ffffff;
// 	border: none;
// 	border-radius: 4px;
// 	font-size: 1rem;
// 	cursor: pointer;

// 	&:hover {
// 		background-color: #0056b3;
// 	}
// `;

// export const HintList = styled.ul`
//   margin: 0 0 1rem;
//   padding-left: 1.25rem;
//   color: #555;
//   font-size: 0.9rem;
//   line-height: 1.4;
// `;

// export const HintItem = styled.li`
//   list-style: disc;
// `;


import styled from "styled-components";

export const RegisterFormStyle = styled.div`

  /* OUTER WRAPPER */
  .form-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin: 20px 0;
    font-size: 35px;
    font-weight: 600;
    text-align: center;
  }

  .highlight {
    color: red;
  }

  /* FORM CONTAINER BOX */
  .form-box {
    width: 90%;
    max-width: 950px;
    background: #f5f5f5;
    padding: 35px;
    border-radius: 14px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.10);
  }

  /* FLEX ROW SYSTEM */
  .row {
    display: flex;
    gap: 22px;
    margin-bottom: 20px;
  }

  /* INPUT FIELDS */
  .field {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 14px;
    margin-bottom: 6px;
    color: #333;
  }

  input,
  select {
    height: 42px;
    border-radius: 6px;
    border: 1px solid #c9c9c9;
    padding: 0 12px;
    font-size: 14px;
    background: white;
  }

  /* MOBILE INPUT */
  .mobile-box {
    display: flex;
    gap: 10px;
  }

  /* PASSWORD BOX */
  .password-box {
    display: flex;
    align-items: center;
    border: 1px solid #c9c9c9;
    background: white;
    border-radius: 6px;
  }

  .password-box input {
    flex: 1;
    height: 42px;
    border: none;
    padding-left: 10px;
    font-size: 14px;
  }

  .password-box span {
    padding: 0 12px;
    cursor: pointer;
    color: #0066ff;
    font-size: 13px;
    font-weight: 500;
  }

  /* PASSWORD RULES */
  .password-rules {
    margin-top: 5px;
    padding-left: 18px;
    font-size: 14px;
    line-height: 1.5;
    color: #666;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .row {
      flex-direction: column;
      gap: 10px;
    }

    .form-box {
      padding: 20px;
    }

    .title {
      font-size: 28px;
    }
      .submit-btn {
  width: 180px;
  height: 45px;
  background: #4f46e5;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
}

.submit-btn:hover {
  background: #4338ca;
}
  }
`;
