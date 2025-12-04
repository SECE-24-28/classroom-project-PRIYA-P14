import styled from "styled-components";

export const RectangleBoxStyle = styled.div`
  background: #ffffffff;
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .pill-box {
    background: #ff2347;
    padding: 60px 80px;
    border-radius: 120px;
    max-width: 1300px;
    margin: 60px auto;
    color: white;
    text-align: center;
  }

  .aptitude {
    font-size: 24px;
    font-family: Arial, sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(255, 0, 0);
  }

  .aptitude h1{
    color: rgb(255, 0, 0);
    font-family: Arial, sans-serif;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    padding: 45px;
    margin: 10px;
  }

  .aptitude h2{
    padding: 0;
    margin: 0;
    text-align: center;
    color: black;
    margin-bottom: 0.5em;
    font-family: "Work Sans", sans-serif;
    font-size: 28px;
  }
  .aptitude h3{
    text-align: center;
    color: rgba(233, 14, 14, 1);
    font-style: italic;
    font-size: 28px;
    font-family: "Work Sans", sans-serif;
    margin: 0;
    padding: 0;

}
  .para p{
  padding: 20px;
  max-width: 1000px;
    font-family: "Work Sans", sans-serif;
    font-size: 20px;
    color: rgb(86, 102, 131);
    text-align: center;
    line-height: 1.6;
    }
  .symbol {
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto 40px;
    padding: 40px 20px;
    text-align: center;
  }

  .symbol h1 {
    font-size: 48px;
    font-weight: 600;
    font-family: "Work Sans", sans-serif;
    margin: 0 0 16px 0;
  }


  .symbol p {
    font-size: 20px;
    font-weight: 500;
    font-family: "Work Sans", sans-serif;
    line-height: 1.8;
    max-width: 900px;
    color: rgb(86, 102, 131);
  }
  .vision h1{
  color: aqua;
    border-left: 4px solid aqua;
    padding-left: 0.5rem;
}
  .vision p{
  font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
  }
  .mission h1{
    color: orange;
    border-left: 4px solid orange;
    padding-left: 0.5rem;
}
  .mission p{
  font-size: 18px;
    font-weight: 500;
    line-height: 1.8;
    font-family: "Work Sans", sans-serif;
    color: rgb(86, 102, 131);
  }

  .pill-box h1 {
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 15px;
  }

  .pill-box p {
    font-size: 20px;
    line-height: 1.5;
    max-width: 900px;
    margin: 0 auto;
    color: white;
  }

  @media (max-width: 900px) {
    .pill-box {
      padding: 30px 20px;
      border-radius: 60px;
      max-width: 95%;
    }

    .pill-box h1 {
      font-size: 24px;
    }

    .pill-box p {
      font-size: 15px;
    }
  }
`;
