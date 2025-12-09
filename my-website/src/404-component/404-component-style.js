import styled from 'styled-components';

export const FourOFourStyle = styled.div`
  .four {
    text-align: center;
    margin-top: 10rem;
  }
  .four h1 {
    font-size: 50px;
    font-weight: 600;
    color: rgb(38, 38, 38);
    margin-bottom: 2rem;
  }
  .four a {
    font-size: 20px;
    color: rgb(0, 102, 204);
    text-decoration: none;
    border: 2px solid rgb(0, 102, 204);
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }
  .four a:hover {
    background-color: rgb(0, 102, 204);
    color: white;
  }
`;