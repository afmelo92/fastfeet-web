/* eslint-disable react/jsx-props-no-spreading */

import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  h1 {
    margin-bottom: 20px;
  }
`;

export const Table = styled.div`
  display: grid;
`;

export const THeader = styled.div`
  display: grid;
  grid-template-columns: 4fr 10fr 2fr;
  font-weight: bold;
  color: #444;
  padding: 20px;

  div {
    &:last-child {
      text-align: end;
    }
  }
`;

export const TRow = styled.div`
  display: grid;
  grid-template-columns: 4fr 10fr 2fr;
  color: #666;
  font-size: 16px;
  background: #fff;
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 5px;

  div {
    display: flex;
    text-align: left;
    align-items: center;

    p {
      margin-left: 5px;
      align-items: center;
    }

    button {
      border: 0;
      background: none;
    }

    &:last-child {
      justify-content: end;
    }
  }
`;
