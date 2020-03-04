import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #7d40e7 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #fff;
  padding: 50px 30px;
  border-radius: 5px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    div {
      align-self: flex-start;
      font-weight: bold;
      padding-bottom: 10px;
    }

    input {
      background: #ffffff 0% 0% no-repeat padding-box;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: #999;
        opacity: 0.7;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
