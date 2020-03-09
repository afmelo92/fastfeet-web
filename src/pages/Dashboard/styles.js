import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  h1 {
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 237px;
    height: 40px;
  }

  button {
    display: flex;
    align-items: center;
    padding: 20px 10px;
    height: 36px;
    font-weight: bold;
    color: #fff;
    background: #7d40e7;
    border-radius: 4px;
    border: none;
  }
`;

export const Table = styled.div`
  display: grid;
`;

export const THeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 1fr;
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
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr 2fr 1fr;
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

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
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

export const StatusTag = styled.div`
  background: #dff0df;
  color: #2ca42b;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 50px;

  div {
    background: #2ca42b;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border-radius: 50%;
  }
`;
