import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg';
import backgroundImageLogo from '../../assets/backgroud-login.jpg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${backgroundImage}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }
`;
export const RightContainer = styled.div`
  background: url('${backgroundImageLogo}');
  background-size: cover;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;

  p {
    color: #fff;
    font-size: bold;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;

    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: #fff;

  span {
    color: #9558a6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  color: #fff;

  input {
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 5px;
  }
`;
export const InputContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
