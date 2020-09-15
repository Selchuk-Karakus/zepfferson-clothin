import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 40px;
  margin: 10px;

  input {
    border: 1px solid black;
    margin-top: -30px;
  }

  input[name='message'] {
    height: 160px;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 85%;
    display: block;
    margin-top: 30px;
  }

  p {
      font-size: 12px;
      border: 1px solid grey;
      padding: 10px;
      width: 100%;
  }
`;

export const ContactTitle = styled.h2`
  margin: 5px 0;
`;