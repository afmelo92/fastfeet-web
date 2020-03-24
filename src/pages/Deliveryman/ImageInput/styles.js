import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    div {
      width: 150px;
      height: 150px;
      border: 4px dashed #ddd;
      border-radius: 50%;
      margin-top: 20px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        text-align: center;
        width: 150px;
        color: #ddd;
        font-weight: bold;
        font-size: 14px;
      }
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      background: #eee;
      margin-top: 20px;
    }

    input {
      display: none;
    }
  }
`;
